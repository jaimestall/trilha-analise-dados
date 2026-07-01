// app.js - versão enxuta e organizada (sem modo noturno)

/* ---------- Dados (TOPICS) ---------- */
const TOPICS = [
  { id: 't1', level: 'Iniciante', title: 'Introdução à Análise de Dados', desc: 'O que é, áreas e aplicações.',
    links: [{label:'Artigo introdutório', url:'https://www.kaggle.com/learn/overview'}, {label:'Vídeo explicativo', url:'https://www.youtube.com/watch?v=aircAruvnKk'}],
    exercise: 'Descreva em 3 frases o que faz um analista de dados e onde ele atua.'
  },
  { id: 't2', level: 'Iniciante', title: 'Fundamentos de Estatística', desc: 'Média, mediana, moda, variância, desvio padrão.',
    links: [{label:'Khan Academy Estatística', url:'https://pt.khanacademy.org/math/statistics-probability'}, {label:'Resumo prático', url:'https://www.datascience.com/blog/statistics-for-data-science'}],
    exercise: 'Calcule média, mediana e desvio padrão de um conjunto de 10 números (crie seus dados).'
  },
  { id: 't3', level: 'Iniciante', title: 'Excel para Análise de Dados', desc: 'Fórmulas, tabelas dinâmicas, gráficos.',
    links: [{label:'Guia de Tabelas Dinâmicas', url:'https://support.microsoft.com/pt-br/excel'}, {label:'Curso rápido', url:'https://www.coursera.org/learn/excel'}],
    exercise: 'Crie uma planilha com 3 colunas e gere uma tabela dinâmica que resuma os dados.'
  },
  { id: 't4', level: 'Iniciante', title: 'Introdução a SQL', desc: 'SELECT, WHERE, JOIN, agregações.',
    links: [{label:'SQLBolt', url:'https://sqlbolt.com/'}, {label:'Mode SQL Tutorial', url:'https://mode.com/sql-tutorial/'}],
    exercise: 'Escreva uma query que selecione clientes com mais de 100 compras e ordene por valor total.'
  },
  { id: 't5', level: 'Iniciante', title: 'Python Básico', desc: 'Sintaxe, tipos, listas, dicionários.',
    links: [{label:'Python.org', url:'https://docs.python.org/3/tutorial/'}, {label:'Curso Python', url:'https://www.codecademy.com/learn/learn-python-3'}],
    exercise: 'Escreva um script que leia uma lista de números e retorne a soma e a média.'
  },
  { id: 't6', level: 'Intermediário', title: 'Pandas e Manipulação de Dados', desc: 'Leitura, limpeza, transformação.',
    links: [{label:'Pandas docs', url:'https://pandas.pydata.org/docs/'}, {label:'Tutorial prático', url:'https://realpython.com/pandas-python-explore-dataset/'}],
    exercise: 'Carregue um CSV, trate valores faltantes e gere um resumo estatístico por coluna.'
  },
  { id: 't7', level: 'Intermediário', title: 'Visualização de Dados', desc: 'Matplotlib, Seaborn; princípios de visualização.',
    links: [{label:'Data Viz Principles', url:'https://www.data-to-viz.com/'}, {label:'Seaborn tutorial', url:'https://seaborn.pydata.org/tutorial.html'}],
    exercise: 'Crie 3 gráficos diferentes (barra, linha, dispersão) para o mesmo dataset.'
  },
  { id: 't8', level: 'Intermediário', title: 'Análise Exploratória de Dados (EDA)', desc: 'Detectar padrões, outliers e hipóteses.',
    links: [{label:'EDA checklist', url:'https://www.kaggle.com/learn/data-cleaning'}, {label:'Guia prático', url:'https://towardsdatascience.com/exploratory-data-analysis-8fc1cb20fd15'}],
    exercise: 'Faça um EDA em um dataset público e escreva 5 insights principais.'
  },
  { id: 't9', level: 'Intermediário', title: 'Modelagem Estatística', desc: 'Regressão linear, testes de hipótese.',
    links: [{label:'Intro to Statistical Learning', url:'https://www.statlearning.com/'}, {label:'Regressão linear', url:'https://scikit-learn.org/stable/modules/linear_model.html'}],
    exercise: 'Ajuste uma regressão linear simples e interprete coeficientes e R².'
  },
  { id: 't10', level: 'Intermediário', title: 'SQL Avançado', desc: 'CTE, window functions, otimização.',
    links: [{label:'Window Functions', url:'https://mode.com/sql-tutorial/sql-window-functions/'}, {label:'CTE guide', url:'https://www.postgresql.org/docs/current/queries-with.html'}],
    exercise: 'Use window functions para calcular ranking por grupo em uma tabela de vendas.'
  },
  { id: 't11', level: 'Avançado', title: 'Machine Learning Básico', desc: 'Classificação, regressão, validação cruzada.',
    links: [{label:'Scikit-learn', url:'https://scikit-learn.org/'}, {label:'Curso ML', url:'https://www.coursera.org/learn/machine-learning'}],
    exercise: 'Treine um classificador simples e avalie com matriz de confusão e AUC.'
  },
  { id: 't12', level: 'Avançado', title: 'Feature Engineering', desc: 'Criação e seleção de features.',
    links: [{label:'Feature Engineering Guide', url:'https://www.kaggle.com/learn/feature-engineering'}, {label:'Artigo prático', url:'https://towardsdatascience.com/feature-engineering-for-machine-learning-3a5e293a5114'}],
    exercise: 'Crie 5 novas features a partir de colunas existentes e compare performance do modelo.'
  },
  { id: 't13', level: 'Avançado', title: 'Modelos Avançados e Deep Learning', desc: 'Redes neurais, frameworks.',
    links: [{label:'TensorFlow', url:'https://www.tensorflow.org/'}, {label:'PyTorch', url:'https://pytorch.org/'}],
    exercise: 'Implemente uma rede neural simples para classificação em um dataset pequeno.'
  },
  { id: 't14', level: 'Avançado', title: 'MLOps e Deploy', desc: 'Pipelines, versionamento, monitoramento.',
    links: [{label:'MLOps overview', url:'https://ml-ops.org/'}, {label:'Deploy models', url:'https://www.tensorflow.org/tfx'}],
    exercise: 'Crie um pipeline simples que treine, valide e salve um modelo automaticamente.'
  },
  { id: 't15', level: 'Avançado', title: 'Big Data e Processamento', desc: 'Spark, arquiteturas distribuídas.',
    links: [{label:'Apache Spark', url:'https://spark.apache.org/'}, {label:'Big Data patterns', url:'https://martinfowler.com/articles/big-data.html'}],
    exercise: 'Execute uma transformação em um dataset grande usando Spark localmente.'
  }
];

/* ---------- DOM refs ---------- */
const topicsEl = document.getElementById('topics');
const controlsEl = document.getElementById('controls');
const searchEl = document.getElementById('search');
const exportBtn = document.getElementById('export-btn');
const importBtn = document.getElementById('import-btn');

const modal = document.getElementById('topic-modal');
const modalTitle = document.getElementById('modal-title');
const modalLevel = document.getElementById('modal-level');
const modalDesc = document.getElementById('modal-desc');
const modalLinks = document.getElementById('modal-links');
const modalExercise = document.getElementById('modal-exercise');
const modalClose = document.getElementById('modal-close');
const modalPrev = document.getElementById('modal-prev');
const modalNext = document.getElementById('modal-next');
const modalComplete = document.getElementById('modal-complete');
const modalNotes = document.getElementById('modal-notes');
const modalPriority = document.getElementById('modal-priority');
const modalSaveNote = document.getElementById('modal-save-note');

const STORAGE_KEY = 'trilha_analise_dados_state_v3';

/* ---------- State helpers ---------- */
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { completed: {}, notes: {}, priority: {} };
    const parsed = JSON.parse(raw);
    return {
      completed: parsed.completed || {},
      notes: parsed.notes || {},
      priority: parsed.priority || {}
    };
  } catch (e) {
    console.error('Erro ao ler localStorage', e);
    return { completed: {}, notes: {}, priority: {} };
  }
}
function saveState(s) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(s));
  } catch (e) {
    console.error('Erro ao salvar localStorage', e);
  }
}

let state = loadState();
let currentFilter = 'Todos';
let currentModalIndex = null;

/* ---------- Utilities ---------- */
function levelClass(level) {
  if (level === 'Iniciante') return 'tag inic';
  if (level === 'Intermediário') return 'tag mid';
  if (level === 'Avançado') return 'tag adv';
  return 'tag';
}

/* ---------- Export / Import ---------- */
function exportProgress() {
  const data = { version: 1, timestamp: new Date().toISOString(), state };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `trilha-progresso-${new Date().toISOString().slice(0,10)}.json`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
function importProgressFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const parsed = JSON.parse(e.target.result);
      if (!parsed || typeof parsed !== 'object' || !parsed.state) {
        alert('Arquivo inválido.');
        return;
      }
      if (!confirm('Importar substituirá o progresso atual. Continuar?')) return;
      state = parsed.state;
      saveState(state);
      refresh();
      alert('Progresso importado.');
    } catch (err) {
      console.error(err);
      alert('Erro ao ler o arquivo.');
    }
  };
  reader.readAsText(file);
}
function createHiddenFileInput() {
  let input = document.getElementById('import-file-input');
  if (input) return input;
  input = document.createElement('input');
  input.type = 'file';
  input.accept = 'application/json';
  input.id = 'import-file-input';
  input.className = 'hidden';
  input.onchange = (e) => {
    const f = e.target.files[0];
    if (f) importProgressFile(f);
    e.target.value = '';
  };
  document.body.appendChild(input);
  return input;
}

/* ---------- Rendering ---------- */
function renderControls() {
  controlsEl.innerHTML = '';
  const container = document.createElement('div');
  container.className = 'controls flex items-center justify-between gap-4 mb-4 flex-wrap';

  const btnGroup = document.createElement('div');
  btnGroup.className = 'btn-group';
  ['Todos','Iniciante','Intermediário','Avançado'].forEach(lvl => {
    const b = document.createElement('button');
    b.className = 'btn';
    if (currentFilter === lvl) b.classList.add('btn-primary');
    b.textContent = lvl;
    b.onclick = () => { currentFilter = lvl; refresh(); };
    btnGroup.appendChild(b);
  });

  const counter = document.createElement('div');
  counter.className = 'controls-counter';
  const total = TOPICS.length;
  const done = Object.values(state.completed).filter(Boolean).length;
  counter.textContent = `Concluídos: ${done} / ${total}`;

  const tools = document.createElement('div');
  tools.className = 'controls-tools';
  const exportBtnLocal = document.createElement('button');
  exportBtnLocal.className = 'btn';
  exportBtnLocal.textContent = 'Exportar progresso';
  exportBtnLocal.onclick = () => exportProgress();

  const importBtnLocal = document.createElement('button');
  importBtnLocal.className = 'btn';
  importBtnLocal.textContent = 'Importar progresso';
  importBtnLocal.onclick = () => {
    const input = createHiddenFileInput();
    input.click();
  };

  tools.appendChild(exportBtnLocal);
  tools.appendChild(importBtnLocal);

  container.appendChild(btnGroup);
  container.appendChild(counter);
  container.appendChild(tools);
  controlsEl.appendChild(container);
}

function renderTopics(list) {
  topicsEl.innerHTML = '';
  const grouped = groupByLevel(list);

  ['Iniciante','Intermediário','Avançado'].forEach(level => {
    if (!grouped[level] || grouped[level].length === 0) return;

    const section = document.createElement('div');
    section.className = 'section bg-white p-4 rounded shadow-sm';

    const header = document.createElement('h2');
    header.className = 'section-title';
    header.textContent = level;
    section.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'space-y-3';

    grouped[level].forEach(topic => {
      const card = document.createElement('div');
      card.className = 'card clickable';
      card.onclick = (e) => {
        if (e.target.tagName.toLowerCase() === 'input') return;
        openModalForTopic(topic.id);
      };

      const left = document.createElement('div');
      left.style.flex = '1';

      const titleRow = document.createElement('div');
      titleRow.className = 'flex items-center justify-between gap-3';

      const title = document.createElement('div');
      title.className = 'title';
      title.textContent = topic.title;

      const meta = document.createElement('div');
      meta.className = 'flex items-center gap-2';

      const tag = document.createElement('span');
      tag.className = levelClass(topic.level);
      tag.textContent = topic.level;

      meta.appendChild(tag);

      const p = state.priority[topic.id];
      if (p) {
        const badge = document.createElement('span');
        badge.className = 'priority-badge';
        badge.dataset.priority = p;
        badge.textContent = p;
        badge.title = p.charAt(0).toUpperCase() + p.slice(1);
        meta.appendChild(badge);
      }

      titleRow.appendChild(title);
      titleRow.appendChild(meta);

      const desc = document.createElement('div');
      desc.className = 'desc';
      desc.textContent = topic.desc;

      left.appendChild(titleRow);
      left.appendChild(desc);

      const right = document.createElement('div');
      right.className = 'flex items-center gap-2';

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      checkbox.checked = !!state.completed[topic.id];
      checkbox.onclick = (ev) => {
        ev.stopPropagation();
        state.completed[topic.id] = checkbox.checked;
        saveState(state);
        refresh();
      };

      right.appendChild(checkbox);

      card.appendChild(left);
      card.appendChild(right);

      if (state.completed[topic.id]) card.classList.add('done');

      grid.appendChild(card);
    });

    section.appendChild(grid);
    topicsEl.appendChild(section);
  });
}

/* ---------- Helpers ---------- */
function groupByLevel(list) {
  const out = { Iniciante: [], Intermediário: [], Avançado: [] };
  list.forEach(t => { if (out[t.level]) out[t.level].push(t); });
  return out;
}
function filterTopics(query, levelFilter) {
  const q = (query || '').trim().toLowerCase();
  return TOPICS.filter(t => {
    if (levelFilter && levelFilter !== 'Todos' && t.level !== levelFilter) return false;
    if (!q) return true;
    return t.title.toLowerCase().includes(q) || t.desc.toLowerCase().includes(q) || (state.notes && state.notes[t.id] && state.notes[t.id].toLowerCase().includes(q));
  });
}

/* ---------- Modal ---------- */
function openModalForTopic(topicId) {
  const filtered = filterTopics(searchEl.value || '', currentFilter);
  const index = filtered.findIndex(t => t.id === topicId);
  if (index === -1) return;
  currentModalIndex = index;
  populateModal(filtered, index);
  showModal();
}

function populateModal(filteredArray, index) {
  const topic = filteredArray[index];
  modalTitle.textContent = topic.title;
  modalLevel.textContent = topic.level;
  modalDesc.textContent = topic.desc;
  modalExercise.textContent = topic.exercise || '';
  modalLinks.innerHTML = '';
  if (Array.isArray(topic.links)) {
    topic.links.forEach(l => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = l.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.textContent = l.label;
      li.appendChild(a);
      modalLinks.appendChild(li);
    });
  }
  modalComplete.checked = !!state.completed[topic.id];
  modalNotes.value = state.notes ? (state.notes[topic.id] || '') : '';
  modalPriority.value = state.priority ? (state.priority[topic.id] || '') : '';
  modalPrev.disabled = index <= 0;
  modalNext.disabled = index >= filteredArray.length - 1;
  modal.dataset.currentTopicId = topic.id;
}

function showModal() { modal.classList.remove('hidden'); modal.classList.add('flex'); modalClose.focus(); }
function closeModal() { modal.classList.remove('flex'); modal.classList.add('hidden'); modal.dataset.currentTopicId = ''; currentModalIndex = null; }
function modalNavigate(direction) {
  const filtered = filterTopics(searchEl.value || '', currentFilter);
  if (currentModalIndex === null) return;
  const newIndex = currentModalIndex + direction;
  if (newIndex < 0 || newIndex >= filtered.length) return;
  currentModalIndex = newIndex;
  populateModal(filtered, newIndex);
}

/* ---------- Events ---------- */
modalClose.addEventListener('click', closeModal);
modalPrev.addEventListener('click', () => modalNavigate(-1));
modalNext.addEventListener('click', () => modalNavigate(1));
modalComplete.addEventListener('change', () => {
  const id = modal.dataset.currentTopicId;
  if (!id) return;
  state.completed[id] = modalComplete.checked;
  saveState(state);
  refresh();
});
modalSaveNote.addEventListener('click', () => {
  const id = modal.dataset.currentTopicId;
  if (!id) return;
  const notesText = modalNotes.value.trim();
  if (notesText) {
    state.notes = state.notes || {};
    state.notes[id] = notesText;
  } else if (state.notes) {
    delete state.notes[id];
  }
  const pr = modalPriority.value;
  if (pr) {
    state.priority = state.priority || {};
    state.priority[id] = pr;
  } else if (state.priority) {
    delete state.priority[id];
  }
  saveState(state);
  refresh();
  modalSaveNote.animate([{ transform: 'translateY(0)' }, { transform: 'translateY(-3px)' }, { transform: 'translateY(0)' }], { duration: 220 });
});

modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', (e) => {
  if (!modal.classList.contains('hidden')) {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') modalNavigate(-1);
    if (e.key === 'ArrowRight') modalNavigate(1);
  }
});

/* ---------- Search ---------- */
searchEl.addEventListener('input', () => refresh());

/* ---------- Export / Import buttons ---------- */
exportBtn.addEventListener('click', () => exportProgress());
importBtn.addEventListener('click', () => {
  const input = createHiddenFileInput();
  input.click();
});

/* ---------- Init ---------- */
createHiddenFileInput();

function refresh() {
  const query = searchEl.value || '';
  const filtered = filterTopics(query, currentFilter);
  renderControls();
  renderTopics(filtered);
}

function init() {
  refresh();
  const footer = document.createElement('div');
  footer.className = 'footer-actions';
  const clearBtn = document.createElement('button');
  clearBtn.className = 'text-red-600 underline';
  clearBtn.textContent = 'Limpar progresso salvo';
  clearBtn.onclick = () => {
    if (confirm('Deseja realmente limpar todo o progresso salvo (inclui notas e prioridades)?')) {
      state = { completed: {}, notes: {}, priority: {} };
      saveState(state);
      refresh();
    }
  };
  topicsEl.parentElement.appendChild(footer);
  footer.appendChild(clearBtn);
}

init();