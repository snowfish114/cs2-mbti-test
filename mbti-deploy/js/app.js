// ============================================================
// CS2选手MBTI人格测试 - 核心逻辑 v4
// 支持延展性追问：主题目 → 追问 → 下一题
// 手动模式：点击选项只高亮，必须点按钮才前进
// 追问答案以 1.5 倍权重参与最终 MBTI 计算
// ============================================================

(function() {
    const TOTAL = CS2MBTI.config.totalQuestions;

    // ---------- 状态 ----------
    let currentQ = 0;
    let inFollowUp = false;
    let answers = {};        // 主题目答案 {题号: 'A'|'B'|'C'|'D'}
    let followupAnswers = {}; // 追问答案 {题号: 'A'|'B'|'C'|'D'}
    let startTime = null;
    let animationFrame = null;

    // ---------- 配置 ----------
    // autoAdvance: true = 选后自动跳转（0.35s 延迟）；false = 手动模式（必须点按钮）
    const AUTO_ADVANCE = false;
    const AUTO_DELAY = 350;

    // ---------- DOM ----------
    const $ = id => document.getElementById(id);
    const pages = {
        welcome: $('page-welcome'),
        test:    $('page-test'),
        result:  $('page-result')
    };

    // ---------- 工具函数 ----------
    function showPage(name) {
        Object.values(pages).forEach(p => p.classList.remove('active'));
        pages[name].classList.add('active');
    }

    // A/B → 0（第1个字母：I/S/T/J），C/D → 1（第2个字母：E/N/F/P）
    function getDimScore(val) {
        return (val === 'A' || val === 'B') ? 0 : 1;
    }

    // ---------- 粒子背景 ----------
    function initParticles() {
        const canvas = $('bgCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let particles = [];

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        for (let i = 0; i < 60; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                r: Math.random() * 1.5 + 0.5,
                dx: (Math.random() - 0.5) * 0.3,
                dy: (Math.random() - 0.5) * 0.3,
                alpha: Math.random() * 0.3 + 0.1
            });
        }

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => {
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 77, 77, ${p.alpha})`;
                ctx.fill();
                p.x += p.dx;
                p.y += p.dy;
                if (p.x < 0) p.x = canvas.width;
                if (p.x > canvas.width) p.x = 0;
                if (p.y < 0) p.y = canvas.height;
                if (p.y > canvas.height) p.y = 0;
            });
            animationFrame = requestAnimationFrame(draw);
        }
        draw();
    }

    // ---------- 进度圆点 ----------
    function buildDots() {
        const container = $('progressDots');
        if (!container) return;
        container.innerHTML = '';
        for (let i = 0; i < TOTAL; i++) {
            const dot = document.createElement('div');
            dot.className = 'dot';
            dot.dataset.idx = i;
            if (answers[i] !== undefined) dot.classList.add('done');
            if (i === currentQ) dot.classList.add('current');
            dot.addEventListener('click', () => {
                if (answers[i] !== undefined || i === 0 || answers[i - 1] !== undefined) {
                    goToQuestion(i);
                }
            });
            container.appendChild(dot);
        }
    }

    function updateDots() {
        const dots = document.querySelectorAll('.dot');
        dots.forEach((dot, i) => {
            dot.classList.remove('done', 'current');
            if (answers[i] !== undefined) dot.classList.add('done');
            if (i === currentQ) dot.classList.add('current');
        });
        if ($('curIdx'))  $('curIdx').textContent  = currentQ + 1;
        if ($('totalCount')) $('totalCount').textContent = TOTAL;
    }

    // ---------- 渲染题目 ----------
    function renderQuestion(idx) {
        const q = CS2MBTI.questions[idx];
        const hasFollowUp = !!(q && q.followUp);

        $('questionDim').textContent = (inFollowUp && hasFollowUp) ? '💬 追问 · 深入探索' : q.category;
        $('questionText').textContent = (inFollowUp && hasFollowUp) ? q.followUp.text : q.text;

        const container = $('optionsContainer');
        container.innerHTML = '';

        const opts = (inFollowUp && hasFollowUp) ? q.followUp.options : q.options;
        const currentAnswer = inFollowUp ? followupAnswers[idx] : answers[idx];

        opts.forEach(opt => {
            const div = document.createElement('div');
            // 关键修复：存储 opt.key（'A'/'B'/'C'/'D'），因为 getDimScore 依赖 key 而非 value
            div.className = 'option' + (currentAnswer === opt.key ? ' selected' : '');
            div.dataset.key   = opt.key;
            div.dataset.value = opt.value;
            div.innerHTML = `<div class="option-text">${opt.text}</div>`;
            div.addEventListener('click', () => selectOption(idx, opt.key, div));
            container.appendChild(div);
        });

        const insight = $('insightTip');
        if (insight) {
            insight.textContent = (inFollowUp && hasFollowUp && q.followUp.insight) ? q.followUp.insight : '';
        }
        const card = $('questionCard');
        if (card) {
            card.classList.toggle('followup-active', inFollowUp && hasFollowUp);
        }

        updateNavButtons();
    }

    function updateNavButtons() {
        const hasAnswer = inFollowUp ? followupAnswers[currentQ] !== undefined : answers[currentQ] !== undefined;
        const isLast = currentQ === TOTAL - 1;
        const q = CS2MBTI.questions[currentQ];
        const hasFollowUp = !!(q && q.followUp);

        $('btnPrev').disabled = currentQ === 0 && !inFollowUp;

        // 只有选中选项，按钮才可点击
        $('btnNext').disabled = !hasAnswer;

        if (isLast && !inFollowUp) {
            $('btnNext').innerHTML = hasAnswer
                ? '查看结果 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>'
                : '下一题';
        } else if (isLast && inFollowUp) {
            $('btnNext').innerHTML = '查看结果 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>';
        } else {
            const nextLabel = inFollowUp ? '下一题' : (hasFollowUp ? '继续' : '下一题');
            $('btnNext').innerHTML = `${nextLabel} <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>`;
        }
    }

    function selectOption(idx, val, el) {
        // 保存答案（主题目和追问分开存）
        if (inFollowUp) {
            followupAnswers[idx] = val;
        } else {
            answers[idx] = val;
        }

        // 高亮选中
        document.querySelectorAll('.option').forEach(o => o.classList.remove('selected'));
        el.classList.add('selected');
        updateDots();

        // 启用按钮（手动模式下这是唯一的触发器）
        $('btnNext').disabled = false;
        updateNavButtons();

        // 自动前进（仅当开启时）
        if (AUTO_ADVANCE) {
            const delay = AUTO_DELAY;
            if (!inFollowUp) {
                setTimeout(() => {
                    inFollowUp = true;
                    updateDots();
                    renderQuestion(idx);
                }, delay);
            } else {
                setTimeout(() => {
                    if (idx < TOTAL - 1) {
                        goToQuestion(idx + 1);
                    } else {
                        renderResult();
                    }
                }, delay);
            }
        }
    }

    function goToQuestion(idx) {
        currentQ = idx;
        inFollowUp = false;
        updateDots();
        renderQuestion(idx);
    }

    // ---------- 匹配算法（核心修复版） ----------
    // 主题目权重 1.0，追问题权重 1.5，区分题权重 10.0
    function calculateUserMBTI() {
        const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
        const counts = { EI: 0, SN: 0, TF: 0, JP: 0 };
        // 区分题专属分：记录用户在各区分维度上选择"左侧"的累积分
        // 用于区分同名MBTI选手
        const discScores = {};   // { 'AL': leftScore, 'AG': leftScore, ... }

        function addScore(dim, score, weight) {
            if (dim === 'EI') {
                if (score === 0) { scores['I'] += weight; counts.EI += weight; }
                else              { scores['E'] += weight; counts.EI += weight; }
            }
            if (dim === 'SN') {
                if (score === 0) { scores['S'] += weight; counts.SN += weight; }
                else              { scores['N'] += weight; counts.SN += weight; }
            }
            if (dim === 'TF') {
                if (score === 0) { scores['T'] += weight; counts.TF += weight; }
                else              { scores['F'] += weight; counts.TF += weight; }
            }
            if (dim === 'JP') {
                if (score === 0) { scores['J'] += weight; counts.JP += weight; }
                else              { scores['P'] += weight; counts.JP += weight; }
            }
        }

        // 主题目（权重 1.0）+ 区分题（权重 10.0，独立维度）
        CS2MBTI.questions.forEach((q, i) => {
            if (answers[i] === undefined) return;
            const rawScore = getDimScore(answers[i]);  // 0=A/B, 1=C/D

            if (q.discriminatorFor && q.discriminatorDimension) {
                // 区分题：A/B(左侧=discriminatorFor[0])加10分，C/D(右侧=discriminatorFor[1])加0分
                // 最终通过 discScores[dim] >= 5 来判断用户偏好左侧还是右侧
                if (!discScores[q.discriminatorDimension]) discScores[q.discriminatorDimension] = 0;
                discScores[q.discriminatorDimension] += (rawScore === 0 ? 1 : 0) * 10.0;
                // 区分题不贡献标准MBTI维度
            } else {
                // 普通主题目
                addScore(q.dimension, rawScore, 1.0);
            }
        });

        // 追问（权重 1.5，追问揭示更细微的性格维度）
        CS2MBTI.questions.forEach((q, i) => {
            if (followupAnswers[i] === undefined || !q.followUp) return;
            const score = getDimScore(followupAnswers[i]);
            // 追问可指定独立维度，否则沿用主题目维度
            const dim = q.followUp.dimension || q.dimension;
            addScore(dim, score, 1.5);
        });

        const dims = [
            { left: 'I', right: 'E', key: 'EI', count: counts.EI },
            { left: 'S', right: 'N', key: 'SN', count: counts.SN },
            { left: 'T', right: 'F', key: 'TF', count: counts.TF },
            { left: 'J', right: 'P', key: 'JP', count: counts.JP }
        ];

        let mbti = '';
        const percentages = {};

        dims.forEach(d => {
            if (d.count === 0) {
                mbti += d.left;
                percentages[d.key] = 50;
                return;
            }
            const leftScore = scores[d.left] / d.count;
            const pct = Math.round((1 - leftScore) * 100);
            const letter = pct >= 50 ? d.right : d.left;
            mbti += letter;
            percentages[d.key] = pct;
        });

        return { mbti, percentages, discScores };
    }

    // 区分维度→选手对的映射：discriminatorFor[0]=左侧(选A/B)喜好，discriminatorFor[1]=右侧(选C/D)喜好
    const DISC_DIM_MAP = {
        'AL': ['ropz', 'Aleksib'],
        'AG': ['YEKINDAR', 'flameZ'],
        'ST': ['sh1ro', 'Magisk'],
        'EM': ['s1mple', 'blameF']
    };

    function calculatePlayerMatch(mbti, percentages, discScores) {
        return CS2MBTI.players.map(player => {
            // 1. 维度匹配分：完全一致=4分
            let dimMatch = 0;
            for (let i = 0; i < 4; i++) {
                if (mbti[i] === player.mbti[i]) dimMatch++;
            }

            // 2. 计算用户在各维度的百分比
            const userPcts = [
                percentages.EI,
                percentages.SN,
                percentages.TF,
                percentages.JP
            ];

            // 3. 计算每位选手的理论维度百分比
            const playerPcts = player.mbti.split('').map(ch => {
                const leftSet = new Set(['I','S','T','J']);
                return leftSet.has(ch) ? 0 : 100;
            });

            // 4. 计算加权距离（差距越小越好）
            let distance = 0;
            for (let i = 0; i < 4; i++) {
                const diff = Math.abs(userPcts[i] - playerPcts[i]);
                distance += diff;
            }

            // 5. 区分题决胜分：检查该选手在每道区分题上的偏好是否与用户一致
            // discScores[dim] = 用户在该维度选A/B的加权分（10分制），>=5分表示倾向左侧(A/B)
            let discBonus = 0;
            Object.entries(DISC_DIM_MAP).forEach(([dim, pair]) => {
                const leftPlayer = pair[0];
                const rightPlayer = pair[1];
                const userPrefersLeft = (discScores[dim] || 0) >= 5;
                if (player.name === leftPlayer && userPrefersLeft) discBonus += 10;
                if (player.name === rightPlayer && !userPrefersLeft) discBonus += 10;
            });

            // 6. 综合得分
            const dimScore = Math.round((dimMatch / 4) * 80);
            const distScore = Math.round(Math.max(0, 20 - (distance / 20)));
            const score = dimScore + distScore + discBonus;

            return { player, score, dimMatch, distance, discBonus };
        }).sort((a, b) => {
            // 1. 维度匹配数降序（最重要）
            if (b.dimMatch !== a.dimMatch) return b.dimMatch - a.dimMatch;
            // 2. 维度百分比距离升序（次重要）
            if (a.distance !== b.distance) return a.distance - b.distance;
            // 3. 区分题决胜（区分同名MBTI选手的关键）
            if (b.discBonus !== a.discBonus) return b.discBonus - a.discBonus;
            // 4. 同分时用ID决胜
            return a.player.id - b.player.id;
        });
    }

    // ---------- 结果页 ----------
    function renderResult() {
        const { mbti, percentages, discScores } = calculateUserMBTI();
        const matches = calculatePlayerMatch(mbti, percentages, discScores);
        const top = matches[0];
        const typeName = CS2MBTI.mbtiNames[mbti] || '待分析';

        const elapsed = startTime ? Math.round((Date.now() - startTime) / 1000) : 0;
        const mins = Math.floor(elapsed / 60);
        const secs = elapsed % 60;
        const timeStr = `${mins}:${String(secs).padStart(2, '0')}`;

        const dimBars = [
            { label: '内向 ← → 外向', key: 'EI', left: 'I', right: 'E' },
            { label: '感觉 ← → 直觉', key: 'SN', left: 'S', right: 'N' },
            { label: '思维 ← → 情感', key: 'TF', left: 'T', right: 'F' },
            { label: '判断 ← → 感知', key: 'JP', left: 'J', right: 'P' }
        ];

        const barHTML = dimBars.map(d => {
            const pct = percentages[d.key] !== undefined ? percentages[d.key] : 50;
            return `<div class="dim-bar-item">
                <div class="dim-bar-header">
                    <span>${d.left}</span>
                    <span>${pct}% ${d.left}${d.right}</span>
                    <span>${d.right}</span>
                </div>
                <div class="dim-bar-track">
                    <div class="dim-bar-fill" style="width:${pct}%"></div>
                </div>
            </div>`;
        }).join('');

        const topPhotoPath = `images/players/${top.player.name}.jpg`;

        // 综合得分最大值 = dimScore(80) + distScore(20) + discBonus(40) = 140
        const maxScore = 140;
        const allPlayersHTML = matches.map((m, i) => {
            const rk = i < 3 ? ['rank-1','rank-2','rank-3'][i] : 'other';
            const pct = Math.round((m.score / maxScore) * 100);
            return `<div class="top3-item ${rk}">
                <div class="rank-medal">${i + 1}</div>
                <div class="top3-info">
                    <div class="top3-name">${m.player.name}</div>
                    <div class="top3-team">${m.player.mbti} · ${m.player.role}</div>
                </div>
                <div class="top3-score">${pct}%</div>
            </div>`;
        }).join('');

        const topPct = Math.round((top.score / maxScore) * 100);

        $('resultInner').innerHTML = `
            <div class="result-card">
                <div class="mbti-badge">
                    <div class="mbti-letter">${mbti}</div>
                    <div class="mbti-full">${typeName}</div>
                </div>

                <div class="match-player">
                    <div class="match-label">最匹配的选手</div>
                    <div class="player-photo-result" style="margin:12px auto;width:120px;height:120px;">
                        <img src="${topPhotoPath}" alt="${top.player.name}"
                             onerror="this.style.display='none';this.nextElementSibling.style.display='flex';"
                             style="width:100%;height:100%;object-fit:cover;border-radius:50%;border:3px solid var(--accent);">
                        <div class="placeholder-icon" style="display:none;font-size:3rem;color:var(--text3);">👤</div>
                    </div>
                    <div class="match-name">${top.player.name}</div>
                    <div class="match-team">${top.player.team} · ${top.player.country}</div>
                    <div class="match-score">匹配度 ${topPct}%</div>
                </div>

                <div class="traits-list">
                    ${top.player.traits.map(t => `<span class="trait-tag">${t}</span>`).join('')}
                </div>

                <div class="result-desc">${top.player.description}</div>

                <div class="dimension-bars">${barHTML}</div>

                <div class="top3-section">
                    <div class="top3-title">选手匹配排名 TOP 20</div>
                    <div class="top3-list">${allPlayersHTML}</div>
                </div>

                <div class="result-actions">
                    <button class="btn-secondary" onclick="location.reload()">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M1 4v6h6M23 20v-6h-6"/>
                            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"/>
                        </svg>
                        重新测试
                    </button>
                </div>
            </div>
        `;

        showPage('result');
    }

    // ---------- 事件绑定 ----------
    $('btnStart').addEventListener('click', () => {
        startTime = Date.now();
        buildDots();
        renderQuestion(0);
        showPage('test');
    });

    $('btnPrev').addEventListener('click', () => {
        if (inFollowUp) {
            inFollowUp = false;
            updateDots();
            renderQuestion(currentQ);
        } else if (currentQ > 0) {
            goToQuestion(currentQ - 1);
        }
    });

    $('btnNext').addEventListener('click', () => {
        const hasAnswer = inFollowUp ? followupAnswers[currentQ] !== undefined : answers[currentQ] !== undefined;
        if (!hasAnswer) return; // 未选则忽略

        if (!inFollowUp) {
            // 主题目 → 进入追问（区分题无追问，直接跳到下一题）
            const q = CS2MBTI.questions[currentQ];
            if (q && q.followUp) {
                inFollowUp = true;
                updateDots();
                renderQuestion(currentQ);
            } else {
                // 区分题：直接跳到下一题或结果
                if (currentQ < TOTAL - 1) {
                    goToQuestion(currentQ + 1);
                } else {
                    renderResult();
                }
            }
        } else {
            // 追问 → 下一题或结果
            if (currentQ < TOTAL - 1) {
                goToQuestion(currentQ + 1);
            } else {
                renderResult();
            }
        }
    });

    // ---------- 初始化 ----------
    initParticles();

})();
