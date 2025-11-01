// 1. DOM 요소 선택
const form = document.querySelector('.form-data');
const region = document.querySelector('.region-name');
const apiKey = document.querySelector('.api-key');
const errors = document.querySelector('.errors');
const loading = document.querySelector('.loading');
const results = document.querySelector('.result-container');
const usage = document.querySelector('.carbon-usage');
const fossilfuel = document.querySelector('.fossil-fuel');
const myregion = document.querySelector('.my-region');
const clearBtn = document.querySelector('.clear-btn');

// 2. 함수 정의

// --- 초기화 함수 ---
function init() {
  const storedApiKey = localStorage.getItem('apiKey');
  const storedRegion = localStorage.getItem('regionName');
  if (storedApiKey === null || storedRegion === null) {
    form.style.display = 'block';
    results.style.display = 'none';
    loading.style.display = 'none';
    clearBtn.style.display = 'none';
    errors.textContent = '';
  } else {
    displayCarbonUsage(storedApiKey, storedRegion);
    results.style.display = 'none';
    form.style.display = 'none';
    clearBtn.style.display = 'block';
  }
}

// --- 사용자 설정 저장 및 화면 세팅 함수 ---
function setUpUser(apiKey, regionName) {
  localStorage.setItem('apiKey', apiKey);
  localStorage.setItem('regionName', regionName);
  loading.style.display = 'block';
  errors.textContent = '';
  clearBtn.style.display = 'block';
  displayCarbonUsage(apiKey, regionName);
}

// --- 폼 제출 처리 함수 ---
function handleSubmit(e) {
  e.preventDefault();
  setUpUser(apiKey.value, region.value);
}

// --- 초기화 버튼 처리 함수 ---
function reset(e) {
  e.preventDefault();
  localStorage.removeItem('regionName');
  init();
}

// 3. 이벤트 등록 + 초기 실행
form.addEventListener('submit', (e) => handleSubmit(e));
clearBtn.addEventListener('click', (e) => reset(e));
init();
