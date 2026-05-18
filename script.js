
/* 군 필터는 현재 육군 자료만 사용하므로 화면에 항상 '육군'으로 고정 표시합니다. */
function forceArmyLabel() {
  const armyTargets = [
    document.querySelector("#armyFilter"),
    document.querySelector("#tableArmyFilter")
  ].filter(Boolean);

  armyTargets.forEach(select => {
    select.innerHTML = '<option value="육군" selected>육군</option>';
    select.value = "육군";
    select.disabled = true;
  });
}

/* =========================================================
   특기별 신체제한 사항 전체표 화면 JavaScript
   ---------------------------------------------------------
   - SPECIALTY_LIMITS 배열이 실제 표시 데이터입니다.
   - 추후 해군·공군 자료를 추가할 때도 같은 형식으로 객체를 추가하면 됩니다.
   - 전체표/필터 화면만 구현했습니다.
   ========================================================= */

const SPECIALTY_LIMITS = [
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "기갑",
    "code": "121.101",
    "name": "K계열전차승무",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "수지결손",
      "수지강직",
      "청력장애",
      "언어장애",
      "폐쇄공포증",
      "수전증",
      "기타: 치질, 심장질환",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "기타",
      "디스크/관절이상",
      "색각장애",
      "수전증",
      "수지강직",
      "수지결손",
      "언어장애",
      "운동장애",
      "청력장애",
      "폐쇄공포증"
    ],
    "requirements": [
      "최저 신체등급 3",
      "신장 159~187cm",
      "교정시력 0.8 이상"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 1
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "기갑",
    "code": "121.102",
    "name": "M계열전차승무",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "수지결손",
      "수지강직",
      "청력장애",
      "언어장애",
      "폐쇄공포증",
      "수전증",
      "기타: 치질, 심장질환",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "기타",
      "디스크/관절이상",
      "색각장애",
      "수전증",
      "수지강직",
      "수지결손",
      "언어장애",
      "운동장애",
      "청력장애",
      "폐쇄공포증"
    ],
    "requirements": [
      "최저 신체등급 3",
      "신장 159~187cm",
      "교정시력 0.8 이상"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 1
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "기갑",
    "code": "122.101",
    "name": "K계열전차부대정비",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "수지결손",
      "수지강직",
      "청력장애",
      "언어장애",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "수지강직",
      "수지결손",
      "언어장애",
      "운동장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4",
      "체중 58~kg"
    ],
    "note": "-",
    "sourcePage": 1
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "기갑",
    "code": "123.101",
    "name": "장갑차조종",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "수지결손",
      "수지강직",
      "청력장애",
      "언어장애",
      "폐쇄공포증",
      "수전증",
      "기타: 치질, 심장질환",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "기타",
      "디스크/관절이상",
      "색각장애",
      "수전증",
      "수지강직",
      "수지결손",
      "언어장애",
      "운동장애",
      "청력장애",
      "폐쇄공포증"
    ],
    "requirements": [
      "최저 신체등급 3",
      "교정시력 0.6 이상"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 1
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "기갑",
    "code": "123.102",
    "name": "장갑차부대정비",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "수지결손",
      "수지강직",
      "청력장애",
      "언어장애",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "수지강직",
      "수지결손",
      "언어장애",
      "운동장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4",
      "체중 58~kg"
    ],
    "note": "-",
    "sourcePage": 1
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "기갑",
    "code": "123.103",
    "name": "K-21보병전투차량승무",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "수지결손",
      "수지강직",
      "청력장애",
      "언어장애",
      "폐쇄공포증",
      "수전증",
      "기타: 치질, 심장질환",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "기타",
      "디스크/관절이상",
      "색각장애",
      "수전증",
      "수지강직",
      "수지결손",
      "언어장애",
      "운동장애",
      "청력장애",
      "폐쇄공포증"
    ],
    "requirements": [
      "최저 신체등급 3",
      "신장 164~180cm",
      "나안시력 0.2 이상"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 1
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "기갑",
    "code": "123.104",
    "name": "K-21보병전투차량부대정비",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "수지결손",
      "수지강직",
      "청력장애",
      "언어장애",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "수지강직",
      "수지결손",
      "언어장애",
      "운동장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4",
      "체중 58~kg"
    ],
    "note": "-",
    "sourcePage": 1
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "포병",
    "code": "131.101",
    "name": "견인포병",
    "limits": [
      "디스크/관절이상",
      "청력장애",
      "언어장애",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "언어장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4",
      "신장 168~203cm",
      "체중 60~kg"
    ],
    "note": "-",
    "sourcePage": 1
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "포병",
    "code": "131.103",
    "name": "155mm자주포병",
    "limits": [
      "디스크/관절이상",
      "청력장애",
      "언어장애",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "언어장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4",
      "신장 168~203cm",
      "체중 60~kg"
    ],
    "note": "-",
    "sourcePage": 1
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "포병",
    "code": "131.104",
    "name": "K-55자주포조종",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "수지결손",
      "수지강직",
      "청력장애",
      "언어장애",
      "폐쇄공포증",
      "수전증",
      "정신질환",
      "기타: 치질, 심장질환",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "기타",
      "디스크/관절이상",
      "색각장애",
      "수전증",
      "수지강직",
      "수지결손",
      "언어장애",
      "운동장애",
      "정신질환",
      "청력장애",
      "폐쇄공포증"
    ],
    "requirements": [
      "최저 신체등급 3",
      "신장 165~185cm",
      "나안시력 0.2 이상",
      "교정시력 0.8 이상"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 1
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "포병",
    "code": "131.107",
    "name": "K-9자주포조종",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "수지결손",
      "수지강직",
      "청력장애",
      "언어장애",
      "폐쇄공포증",
      "수전증",
      "정신질환",
      "기타: 치질, 심장질환",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "기타",
      "디스크/관절이상",
      "색각장애",
      "수전증",
      "수지강직",
      "수지결손",
      "언어장애",
      "운동장애",
      "정신질환",
      "청력장애",
      "폐쇄공포증"
    ],
    "requirements": [
      "최저 신체등급 3",
      "신장 165~185cm",
      "나안시력 0.2 이상",
      "교정시력 0.8 이상"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 1
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "포병",
    "code": "132.102",
    "name": "K239포병",
    "limits": [
      "수지결손",
      "청력장애",
      "언어장애",
      "폐쇄공포증",
      "정신질환",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "수지결손",
      "언어장애",
      "정신질환",
      "청력장애",
      "폐쇄공포증"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 1
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "포병",
    "code": "132.103",
    "name": "M/A포병",
    "limits": [
      "수지결손",
      "청력장애",
      "언어장애",
      "폐쇄공포증",
      "정신질환",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "수지결손",
      "언어장애",
      "정신질환",
      "청력장애",
      "폐쇄공포증"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 1
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "포병",
    "code": "133.103",
    "name": "사격지휘",
    "limits": [
      "수지결손",
      "청력장애",
      "언어장애",
      "폐쇄공포증",
      "정신질환",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "수지결손",
      "언어장애",
      "정신질환",
      "청력장애",
      "폐쇄공포증"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 1
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "포병",
    "code": "133.106",
    "name": "포병레이더",
    "limits": [
      "청력장애",
      "언어장애",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "언어장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4",
      "교정시력 0.8 이상"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 2
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "포병",
    "code": "133.107",
    "name": "포병측지",
    "limits": [
      "청력장애",
      "언어장애",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "언어장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4",
      "교정시력 0.8 이상"
    ],
    "note": "-",
    "sourcePage": 2
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "포병",
    "code": "134.101",
    "name": "현무포병",
    "limits": [
      "청력장애",
      "언어장애",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "언어장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 2
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "방공",
    "code": "141.101",
    "name": "발칸운용/정비",
    "limits": [
      "청력장애",
      "정신질환",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "정신질환",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 2
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "방공",
    "code": "141.102",
    "name": "오리콘운용/정비",
    "limits": [
      "청력장애",
      "정신질환",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "정신질환",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 2
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "방공",
    "code": "141.103",
    "name": "비호운용/정비",
    "limits": [
      "청력장애",
      "정신질환",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "정신질환",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 2
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "방공",
    "code": "141.104",
    "name": "방공작전통제",
    "limits": [
      "청력장애",
      "언어장애",
      "정신질환",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "언어장애",
      "정신질환",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 2
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "방공",
    "code": "141.105",
    "name": "휴대용유도무기운용/정비",
    "limits": [
      "운동장애",
      "정신질환",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "운동장애",
      "정신질환"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 2
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "방공",
    "code": "141.106",
    "name": "천마운용/정비",
    "limits": [
      "청력장애",
      "정신질환",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "정신질환",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 2
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "방공",
    "code": "141.107",
    "name": "천호운용/정비",
    "limits": [
      "운동장애",
      "청력장애",
      "폐쇄공포증",
      "정신질환"
    ],
    "limitGroups": [
      "운동장애",
      "정신질환",
      "청력장애",
      "폐쇄공포증"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 2
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "방공",
    "code": "143.101",
    "name": "방공레이더운용/정비",
    "limits": [
      "청력장애",
      "정신질환",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "정신질환",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 2
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "정보",
    "code": "151.101",
    "name": "군사정보",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 2
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "정보",
    "code": "152.101",
    "name": "신호정보/전자전운용",
    "limits": [
      "청력장애",
      "언어장애",
      "폐쇄공포증",
      "정신질환",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "언어장애",
      "정신질환",
      "청력장애",
      "폐쇄공포증"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 2
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "정보",
    "code": "152.103",
    "name": "땅굴탐지",
    "limits": [
      "디스크/관절이상",
      "청력장애",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 2
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "정보",
    "code": "153.101",
    "name": "감시장비운용",
    "limits": [
      "언어장애",
      "폐쇄공포증",
      "정신질환",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "언어장애",
      "정신질환",
      "폐쇄공포증"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 2
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "공병",
    "code": "161.101",
    "name": "야전공병",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "수지결손",
      "수지강직",
      "청력장애",
      "수전증"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "수전증",
      "수지강직",
      "수지결손",
      "운동장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "-",
    "sourcePage": 3
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "공병",
    "code": "161.102",
    "name": "장애물운용(M)",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "수지결손",
      "수지강직",
      "청력장애",
      "수전증"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "수전증",
      "수지강직",
      "수지결손",
      "운동장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 3
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "공병",
    "code": "161.103",
    "name": "장애물운용(E)",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "수지결손",
      "수지강직",
      "청력장애",
      "수전증"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "수전증",
      "수지강직",
      "수지결손",
      "운동장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 3
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "공병",
    "code": "161.104",
    "name": "야전건설",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 3
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "공병",
    "code": "162.102",
    "name": "소방장비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 3
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "공병",
    "code": "162.103",
    "name": "배관/기계설비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 3
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "공병",
    "code": "162.104",
    "name": "전기설비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 3
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "공병",
    "code": "163.101",
    "name": "장갑전투도저운전",
    "limits": [
      "디스크/관절이상",
      "청력장애",
      "언어장애"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "언어장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4",
      "나안시력 0.2 이상",
      "교정시력 0.8 이상"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 3
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "공병",
    "code": "163.102",
    "name": "다목적굴착기운전",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 3
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "공병",
    "code": "163.103",
    "name": "교량전차조종",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "청력장애",
      "언어장애"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "언어장애",
      "운동장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 2",
      "신장 164~180cm",
      "나안시력 0.2 이상"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 3
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "공병",
    "code": "163.104",
    "name": "도하장비조종",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 3
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "공병",
    "code": "163.105",
    "name": "정수장비운용",
    "limits": [
      "디스크/관절이상"
    ],
    "limitGroups": [
      "디스크/관절이상"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 3
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "공병",
    "code": "163.107",
    "name": "공기압축기운용",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 3
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "공병",
    "code": "163.108",
    "name": "크레인운용",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 3
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "공병",
    "code": "163.109",
    "name": "도저운용",
    "limits": [
      "디스크/관절이상"
    ],
    "limitGroups": [
      "디스크/관절이상"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 3
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "공병",
    "code": "163.110",
    "name": "도로포장장비운용(그레이더+롤러 통합)",
    "limits": [
      "디스크/관절이상"
    ],
    "limitGroups": [
      "디스크/관절이상"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 3
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "공병",
    "code": "163.112",
    "name": "로더운전",
    "limits": [
      "디스크/관절이상"
    ],
    "limitGroups": [
      "디스크/관절이상"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 4
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "공병",
    "code": "163.113",
    "name": "굴착기운용",
    "limits": [
      "디스크/관절이상"
    ],
    "limitGroups": [
      "디스크/관절이상"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 4
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "공병",
    "code": "163.114",
    "name": "발전기운용/정비",
    "limits": [
      "디스크/관절이상"
    ],
    "limitGroups": [
      "디스크/관절이상"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 4
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "공병",
    "code": "163.115",
    "name": "공병장비부대정비",
    "limits": [
      "디스크/관절이상"
    ],
    "limitGroups": [
      "디스크/관절이상"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 4
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "정보통신",
    "code": "171.101",
    "name": "전술통신장비운용/정비",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "청력장애",
      "언어장애",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "언어장애",
      "운동장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 4
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "정보통신",
    "code": "171.102",
    "name": "무선전송장비운용/정비",
    "limits": [
      "디스크/관절이상",
      "청력장애",
      "언어장애"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "언어장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 4
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "정보통신",
    "code": "171.104",
    "name": "이동통신장비운용/정비",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "청력장애",
      "언어장애"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "언어장애",
      "운동장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 4
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "정보통신",
    "code": "171.105",
    "name": "정보통신망관리장비운용/정비",
    "limits": [
      "청력장애",
      "언어장애",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "언어장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 4
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "정보통신",
    "code": "171.107",
    "name": "교환시설운용/정비",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "청력장애",
      "언어장애",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "언어장애",
      "운동장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 4
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "정보통신",
    "code": "172.101",
    "name": "MW운용/정비",
    "limits": [
      "청력장애",
      "언어장애"
    ],
    "limitGroups": [
      "언어장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 4
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "정보통신",
    "code": "172.102",
    "name": "위성운용/정비",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "청력장애",
      "언어장애"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "언어장애",
      "운동장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 4
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "정보통신",
    "code": "173.101",
    "name": "암호운용",
    "limits": [
      "디스크/관절이상",
      "수지결손",
      "수지강직",
      "청력장애",
      "언어장애",
      "폐쇄공포증",
      "수전증",
      "정신질환",
      "기타: 치질, 탈장"
    ],
    "limitGroups": [
      "기타",
      "디스크/관절이상",
      "수전증",
      "수지강직",
      "수지결손",
      "언어장애",
      "정신질환",
      "청력장애",
      "폐쇄공포증"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 4
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "정보통신",
    "code": "174.101",
    "name": "레이다운용/정비",
    "limits": [
      "디스크/관절이상",
      "색각장애: 색약색맹/맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 4
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "정보통신",
    "code": "175.101",
    "name": "네트워크운용/정비",
    "limits": [
      "디스크/관절이상",
      "청력장애",
      "언어장애",
      "색각장애: 색약색맹/맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "언어장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 4
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "정보통신",
    "code": "175.102",
    "name": "전술C4I운용/정비",
    "limits": [
      "디스크/관절이상",
      "청력장애",
      "언어장애",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "언어장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 4
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "정보통신",
    "code": "175.103",
    "name": "정보체계운용/정비",
    "limits": [
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "색각장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 4
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "항공",
    "code": "181.101",
    "name": "항공운항/관제",
    "limits": [
      "청력장애",
      "언어장애",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "언어장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 5
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "항공",
    "code": "182.101",
    "name": "공격헬기정비",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "청력장애",
      "언어장애",
      "정신질환",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "언어장애",
      "운동장애",
      "정신질환",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 5
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "항공",
    "code": "182.104",
    "name": "기동헬기운용",
    "limits": [
      "청력장애",
      "언어장애",
      "정신질환",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "언어장애",
      "정신질환",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 3",
      "교정시력 0.8 이상"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 5
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "화생방",
    "code": "211.101",
    "name": "화생방",
    "limits": [
      "폐쇄공포증",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "폐쇄공포증"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 5
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "화생방",
    "code": "211.102",
    "name": "연막",
    "limits": [
      "디스크/관절이상"
    ],
    "limitGroups": [
      "디스크/관절이상"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 5
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "화생방",
    "code": "211.103",
    "name": "화생방제독",
    "limits": [
      "디스크/관절이상",
      "폐쇄공포증"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "폐쇄공포증"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 5
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "화생방",
    "code": "211.104",
    "name": "화생방정찰",
    "limits": [
      "디스크/관절이상",
      "폐쇄공포증",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "폐쇄공포증"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 5
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병기",
    "code": "221.101",
    "name": "대공포/유도무기정비",
    "limits": [
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "색각장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 5
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병기",
    "code": "221.102",
    "name": "로켓무기정비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 5
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병기",
    "code": "222.101",
    "name": "총기정비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 5
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병기",
    "code": "222.102",
    "name": "화포정비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 5
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병기",
    "code": "222.103",
    "name": "광학기재정비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 5
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병기",
    "code": "222.104",
    "name": "감시장비정비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 5
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병기",
    "code": "222.105",
    "name": "전차정비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 5
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병기",
    "code": "222.109",
    "name": "자주포야전정비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 5
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병기",
    "code": "222.114",
    "name": "장갑차야전정비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 5
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병기",
    "code": "223.101",
    "name": "유선장비정비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 6
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병기",
    "code": "223.103",
    "name": "무선장비정비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 6
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병기",
    "code": "223.104",
    "name": "다중무선장비정비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 6
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병기",
    "code": "223.106",
    "name": "특수통신장비정비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 6
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병기",
    "code": "224.101",
    "name": "차량정비",
    "limits": [
      "디스크/관절이상",
      "운동장애"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "운동장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 6
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병기",
    "code": "224.102",
    "name": "공병장비정비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 6
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병기",
    "code": "224.103",
    "name": "발전기정비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 6
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병기",
    "code": "224.104",
    "name": "용접 기계공작",
    "limits": [
      "디스크/관절이상",
      "운동장애"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "운동장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 6
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병기",
    "code": "224.105",
    "name": "병참장비정비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 6
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병기",
    "code": "224.106",
    "name": "화생방장비정비",
    "limits": [
      "디스크/관절이상"
    ],
    "limitGroups": [
      "디스크/관절이상"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 6
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병기",
    "code": "224.107",
    "name": "의무장비정비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 6
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병기",
    "code": "225.101",
    "name": "탄약관리",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 6
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병기",
    "code": "226.101",
    "name": "장비수리부속공구보급",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 6
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병참",
    "code": "231.101",
    "name": "편성보급",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "수지결손",
      "수지강직",
      "언어장애",
      "정신질환",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "수지강직",
      "수지결손",
      "언어장애",
      "운동장애",
      "정신질환"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 6
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병참",
    "code": "231.102",
    "name": "영현등록",
    "limits": [
      "수지결손",
      "수지강직",
      "언어장애",
      "정신질환",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "수지강직",
      "수지결손",
      "언어장애",
      "정신질환"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 6
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병참",
    "code": "231.103",
    "name": "지원보급",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "수지결손",
      "수지강직",
      "언어장애",
      "정신질환",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "수지강직",
      "수지결손",
      "언어장애",
      "운동장애",
      "정신질환"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 6
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병참",
    "code": "231.104",
    "name": "연료관리",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "수지결손",
      "수지강직",
      "언어장애",
      "정신질환",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "수지강직",
      "수지결손",
      "언어장애",
      "운동장애",
      "정신질환"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 6
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병참",
    "code": "231.106",
    "name": "물자근무지원",
    "limits": [
      "운동장애",
      "수지결손",
      "수지강직",
      "언어장애",
      "정신질환",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "수지강직",
      "수지결손",
      "언어장애",
      "운동장애",
      "정신질환"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 6
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "병참",
    "code": "231.107",
    "name": "조리",
    "limits": [
      "운동장애",
      "수지결손",
      "수지강직",
      "정신질환",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "수지강직",
      "수지결손",
      "운동장애",
      "정신질환"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 6
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "수송",
    "code": "241.100",
    "name": "수송운용(차량운전)",
    "limits": [
      "디스크/관절이상",
      "정신질환"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "정신질환"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 7
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "수송",
    "code": "241.104",
    "name": "견인차량운전",
    "limits": [
      "디스크/관절이상",
      "청력장애",
      "정신질환",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "정신질환",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4",
      "신장 165~190cm"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 7
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "수송",
    "code": "241.105",
    "name": "지게차운전",
    "limits": [
      "정신질환",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "정신질환"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 7
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "수송",
    "code": "241.106",
    "name": "차륜형장갑차운전",
    "limits": [
      "디스크/관절이상",
      "청력장애",
      "정신질환",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "정신질환",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4",
      "신장 ~190cm"
    ],
    "note": "-",
    "sourcePage": 7
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "수송",
    "code": "241.107",
    "name": "차량부대정비",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "정신질환"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "운동장애",
      "정신질환"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 7
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "수송",
    "code": "241.108",
    "name": "K-53계열차량운전",
    "limits": [
      "디스크/관절이상",
      "청력장애",
      "정신질환",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "정신질환",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 7
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "수송",
    "code": "241.109",
    "name": "구난차량운전",
    "limits": [
      "디스크/관절이상",
      "청력장애",
      "정신질환",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "정신질환",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4",
      "신장 165~190cm"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 7
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "수송",
    "code": "241.113",
    "name": "크레인차량운전",
    "limits": [
      "디스크/관절이상",
      "청력장애",
      "정신질환",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "정신질환",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4",
      "신장 165~190cm"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 7
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "수송",
    "code": "242.101",
    "name": "전장이동통제",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "수지결손",
      "수지강직",
      "언어장애",
      "정신질환",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "수지강직",
      "수지결손",
      "언어장애",
      "운동장애",
      "정신질환"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 7
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "수송",
    "code": "243.101",
    "name": "항만운용",
    "limits": [
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "색각장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 7
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "수송",
    "code": "243.102",
    "name": "선박운용",
    "limits": [
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "색각장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 7
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "인사",
    "code": "311.101",
    "name": "일반행정",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 7
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "군사경찰",
    "code": "321.101",
    "name": "군사경찰",
    "limits": [
      "디스크/관절이상",
      "정신질환",
      "기타: 흉터",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "기타",
      "디스크/관절이상",
      "색각장애",
      "정신질환"
    ],
    "requirements": [
      "최저 신체등급 2",
      "신장 175~cm",
      "체중 ~90kg"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외 / 민소매·짧은 반바지 착용 시 외관상 보이는 곳에 문신이 있는 경우 지원 제한",
    "sourcePage": 7
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "재정",
    "code": "331.101",
    "name": "재정회계",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 7
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "공보정훈",
    "code": "341.101",
    "name": "공보정훈",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 7
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "공보정훈",
    "code": "341.102",
    "name": "영상제작",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 7
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "공보정훈",
    "code": "341.103",
    "name": "사진운용/정비",
    "limits": [
      "청력장애",
      "언어장애"
    ],
    "limitGroups": [
      "언어장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 7
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "의무",
    "code": "411.101",
    "name": "일반의무",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 8
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "의무",
    "code": "411.103",
    "name": "수의",
    "limits": [
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "색각장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 8
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "의무",
    "code": "411.108",
    "name": "의무보급",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 8
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "의무",
    "code": "412.101",
    "name": "전문간호",
    "limits": [
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "색각장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 8
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "의무",
    "code": "412.102",
    "name": "전문치과",
    "limits": [
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "색각장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 8
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "의무",
    "code": "412.103",
    "name": "전문임상병리",
    "limits": [
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "색각장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 8
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "의무",
    "code": "412.104",
    "name": "전문방사선촬영",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 8
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "의무",
    "code": "412.105",
    "name": "전문약제",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 8
  },
  {
    "army": "육군",
    "category": "기술행정병",
    "branch": "의무",
    "code": "412.106",
    "name": "전문물리치료",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 8
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "기갑",
    "code": "B121.101",
    "name": "K계열전차승무",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "수지결손",
      "수지강직",
      "청력장애",
      "언어장애",
      "폐쇄공포증",
      "수전증",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "수전증",
      "수지강직",
      "수지결손",
      "언어장애",
      "운동장애",
      "청력장애",
      "폐쇄공포증"
    ],
    "requirements": [
      "최저 신체등급 3",
      "신장 159~187cm",
      "교정시력 0.8 이상"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 9
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "기갑",
    "code": "B123.101",
    "name": "장갑차조종",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "수지결손",
      "수지강직",
      "청력장애",
      "언어장애",
      "폐쇄공포증",
      "수전증",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "수전증",
      "수지강직",
      "수지결손",
      "언어장애",
      "운동장애",
      "청력장애",
      "폐쇄공포증"
    ],
    "requirements": [
      "최저 신체등급 3",
      "교정시력 0.6 이상"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 9
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "포병",
    "code": "B131.107",
    "name": "K-9자주포조종",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "수지결손",
      "수지강직",
      "청력장애",
      "언어장애",
      "폐쇄공포증",
      "수전증",
      "정신질환",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "수전증",
      "수지강직",
      "수지결손",
      "언어장애",
      "운동장애",
      "청력장애",
      "폐쇄공포증"
    ],
    "requirements": [
      "최저 신체등급 3",
      "신장 165~185cm",
      "나안시력 0.2 이상",
      "교정시력 0.8 이상"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 9
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "포병",
    "code": "B131.108",
    "name": "K-9자주포화포/장갑정비",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "청력장애",
      "언어장애",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "언어장애",
      "운동장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 3",
      "신장 168~190cm"
    ],
    "note": "-",
    "sourcePage": 9
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "방공",
    "code": "B141.101",
    "name": "발칸운용/정비",
    "limits": [
      "청력장애",
      "정신질환",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "-",
    "sourcePage": 9
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "공병",
    "code": "B162.104",
    "name": "전기설비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "-",
    "sourcePage": 9
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "공병",
    "code": "B163.101",
    "name": "장갑전투도저운전",
    "limits": [
      "디스크/관절이상",
      "청력장애",
      "언어장애"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "언어장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 3",
      "나안시력 0.2 이상",
      "교정시력 0.8 이상"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 9
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "공병",
    "code": "B163.113",
    "name": "굴착기운용",
    "limits": [
      "디스크/관절이상"
    ],
    "limitGroups": [
      "디스크/관절이상"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "-",
    "sourcePage": 9
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "정보통신",
    "code": "B171.102",
    "name": "무선전송장비운용/정비",
    "limits": [
      "디스크/관절이상",
      "청력장애",
      "언어장애"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "언어장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "-",
    "sourcePage": 9
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "정보통신",
    "code": "B172.101",
    "name": "MW운용/정비",
    "limits": [
      "청력장애",
      "언어장애"
    ],
    "limitGroups": [
      "언어장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 9
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "정보통신",
    "code": "B172.102",
    "name": "위성운용/정비",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "청력장애",
      "언어장애"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "언어장애",
      "운동장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 9
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "정보통신",
    "code": "B175.101",
    "name": "네트워크운용/정비",
    "limits": [
      "디스크/관절이상",
      "청력장애",
      "언어장애",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "언어장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "-",
    "sourcePage": 9
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "정보통신",
    "code": "B175.102",
    "name": "전술C4I운용/정비",
    "limits": [
      "디스크/관절이상",
      "청력장애",
      "언어장애",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "언어장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 9
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "항공",
    "code": "B182.101",
    "name": "공격헬기정비",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "청력장애",
      "언어장애",
      "정신질환",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "언어장애",
      "운동장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 10
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "항공",
    "code": "B182.104",
    "name": "기동헬기운용",
    "limits": [
      "청력장애",
      "언어장애",
      "정신질환",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "언어장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 3",
      "교정시력 0.8 이상"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 10
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "병기",
    "code": "B222.101",
    "name": "총기정비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 10
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "병기",
    "code": "B222.102",
    "name": "화포정비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 10
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "병기",
    "code": "B222.105",
    "name": "전차정비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "-",
    "sourcePage": 10
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "병기",
    "code": "B222.109",
    "name": "자주포야전정비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "-",
    "sourcePage": 10
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "병기",
    "code": "B222.114",
    "name": "장갑차야전정비",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "-",
    "sourcePage": 10
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "병기",
    "code": "B224.101",
    "name": "차량정비",
    "limits": [
      "디스크/관절이상",
      "운동장애"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "운동장애"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "-",
    "sourcePage": 10
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "병기",
    "code": "B225.101",
    "name": "탄약관리",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 10
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "병참",
    "code": "B231.107",
    "name": "조리",
    "limits": [
      "운동장애",
      "수지결손",
      "수지강직",
      "정신질환",
      "색각장애: 색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "수지강직",
      "수지결손",
      "운동장애",
      "정신질환"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "2차 심리검사 결과 정밀검사 대상자 제외",
    "sourcePage": 10
  },
  {
    "army": "육군",
    "category": "임기제부사관",
    "branch": "수송",
    "code": "B241.107",
    "name": "차량부대정비",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "정신질환"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "운동장애",
      "정신질환"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "-",
    "sourcePage": 10
  },
  {
    "army": "육군",
    "category": "카투사",
    "branch": "",
    "code": "P000291",
    "name": "카투사",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 11
  },
  {
    "army": "육군",
    "category": "어학병",
    "branch": "",
    "code": "0001600",
    "name": "영어어학병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 11
  },
  {
    "army": "육군",
    "category": "어학병",
    "branch": "",
    "code": "0001601",
    "name": "프랑스어어학병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 11
  },
  {
    "army": "육군",
    "category": "어학병",
    "branch": "",
    "code": "0001602",
    "name": "스페인어어학병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 11
  },
  {
    "army": "육군",
    "category": "어학병",
    "branch": "",
    "code": "0001603",
    "name": "독일어어학병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 11
  },
  {
    "army": "육군",
    "category": "어학병",
    "branch": "",
    "code": "0001604",
    "name": "일본어어학병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 11
  },
  {
    "army": "육군",
    "category": "어학병",
    "branch": "",
    "code": "0001605",
    "name": "중국어어학병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 11
  },
  {
    "army": "육군",
    "category": "어학병",
    "branch": "",
    "code": "0001606",
    "name": "러시아어어학병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 11
  },
  {
    "army": "육군",
    "category": "어학병",
    "branch": "",
    "code": "0001610",
    "name": "아랍어어학병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 11
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "900101",
    "name": "군사과학기술병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "-",
    "sourcePage": 11
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "111275",
    "name": "유해발굴기록병",
    "limits": [
      "정신질환",
      "정형외과 질환",
      "피부과 질환",
      "알레르기",
      "천식"
    ],
    "limitGroups": [
      "기타 질환",
      "정신질환"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "-",
    "sourcePage": 11
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "111284",
    "name": "의장병",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "수지결손",
      "수지강직",
      "청력장애",
      "언어장애",
      "수전증",
      "정신질환"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "수전증",
      "수지강직",
      "수지결손",
      "언어장애",
      "운동장애",
      "정신질환",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 3",
      "신장 180~cm",
      "체중 65~90kg"
    ],
    "note": "문신이 있는 경우 지원 제한",
    "sourcePage": 11
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "111292",
    "name": "훈련소조교병",
    "limits": [
      "디스크/관절이상"
    ],
    "limitGroups": [
      "디스크/관절이상"
    ],
    "requirements": [
      "최저 신체등급 2",
      "신장 170~cm",
      "체중 56~kg",
      "교정시력 0.8 이상"
    ],
    "note": "민소매·짧은 반바지 착용 시 외관상 보이는 곳에 문신이 있는 경우 지원 제한",
    "sourcePage": 11
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "111000",
    "name": "JSA경비병",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "청력장애",
      "언어장애",
      "폐쇄공포증",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "언어장애",
      "운동장애",
      "청력장애",
      "폐쇄공포증"
    ],
    "requirements": [
      "최저 신체등급 2",
      "신장 174~cm",
      "체중 65~kg",
      "교정시력 1.0 이상"
    ],
    "note": "-",
    "sourcePage": 11
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "112100",
    "name": "특전병",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "청력장애",
      "언어장애",
      "폐쇄공포증",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "디스크/관절이상",
      "색각장애",
      "언어장애",
      "운동장애",
      "청력장애",
      "폐쇄공포증"
    ],
    "requirements": [
      "최저 신체등급 2",
      "교정시력 0.8 이상"
    ],
    "note": "-",
    "sourcePage": 11
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "151101",
    "name": "신호정보/전자전운용",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "청력장애",
      "정신질환",
      "기타 질환: 폐결핵 천식"
    ],
    "limitGroups": [
      "기타 질환",
      "디스크/관절이상",
      "운동장애",
      "정신질환",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 11
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "152296",
    "name": "탐지분석병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 11
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "156101",
    "name": "드론운용/정비병",
    "limits": [
      "수지결손",
      "수지강직",
      "청력장애",
      "수전증",
      "정신질환",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "수전증",
      "수지강직",
      "수지결손",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "-",
    "sourcePage": 11
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "175104",
    "name": "정보보호병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "-",
    "sourcePage": 11
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "175105",
    "name": "SW개발병",
    "limits": [
      "수지결손",
      "수지강직",
      "청력장애",
      "언어장애",
      "정신질환",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "수지강직",
      "수지결손",
      "언어장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "신원조회 실시",
    "sourcePage": 11
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "211239",
    "name": "화생방시험병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 12
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "211295",
    "name": "방사능시험병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 12
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "311334",
    "name": "지식재산관리병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 12
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "321273",
    "name": "33경호병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 2",
      "신장 175~ 190cm",
      "체중 ~90kg",
      "나안시력 0.8 이상"
    ],
    "note": "민소매·짧은 반바지 착용 시 외관상 보이는 곳에 문신이 있는 경우 지원 제한 / 신원조회 실시",
    "sourcePage": 12
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "321102",
    "name": "특임군사경찰",
    "limits": [
      "디스크/관절이상",
      "운동장애",
      "청력장애",
      "언어장애",
      "정신질환",
      "색각장애: 색약색맹 제외",
      "기타 질환: 내반슬 치질"
    ],
    "limitGroups": [
      "기타 질환",
      "디스크/관절이상",
      "색각장애",
      "언어장애",
      "운동장애",
      "정신질환",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 2",
      "신장 168~cm",
      "교정시력 0.8 이상"
    ],
    "note": "민소매·짧은 반바지 착용 시 외관상 보이는 곳에 문신이 있는 경우 지원 제한",
    "sourcePage": 12
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "321103",
    "name": "MC군사경찰",
    "limits": [
      "운동장애",
      "수지결손",
      "수지강직",
      "청력장애",
      "언어장애",
      "색각장애: 색약색맹 제외"
    ],
    "limitGroups": [
      "색각장애",
      "수지강직",
      "수지결손",
      "언어장애",
      "운동장애",
      "청력장애"
    ],
    "requirements": [
      "최저 신체등급 2",
      "신장 175~cm",
      "나안시력 0.8 이상"
    ],
    "note": "민소매·짧은 반바지 착용 시 외관상 보이는 곳에 문신이 있는 경우 지원 제한",
    "sourcePage": 12
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "331267",
    "name": "회계원가비용분석병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 12
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "341335",
    "name": "영상콘텐츠디자이너병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "-",
    "sourcePage": 12
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "341336",
    "name": "그래픽디자이너병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "-",
    "sourcePage": 12
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "341337",
    "name": "사진콘텐츠디자이너병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "-",
    "sourcePage": 12
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "342.101",
    "name": "군악",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 12
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "411294",
    "name": "유해발굴감식병",
    "limits": [
      "정신질환",
      "기타 질환: 정형외과 피부과 , 알레르기 천식"
    ],
    "limitGroups": [
      "기타 질환",
      "정신질환"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "-",
    "sourcePage": 12
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "471277",
    "name": "기독교군종병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 12
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "471278",
    "name": "천주교군종병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 12
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "471279",
    "name": "불교군종병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 12
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "E00001",
    "name": "국군체육특기병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 4"
    ],
    "note": "-",
    "sourcePage": 12
  },
  {
    "army": "육군",
    "category": "전문특기병",
    "branch": "",
    "code": "175106",
    "name": "사이버작전병",
    "limits": [
      "해당 제한사항 없음"
    ],
    "limitGroups": [
      "제한사항 없음"
    ],
    "requirements": [
      "최저 신체등급 3"
    ],
    "note": "-",
    "sourcePage": 12
  }
];

const armyFilter = document.querySelector("#armyFilter");
const categoryFilter = document.querySelector("#categoryFilter");
const keywordFilter = document.querySelector("#keywordFilter");
const resetButton = document.querySelector("#resetButton");
const cardList = document.querySelector("#cardList");
const emptyMessage = document.querySelector("#emptyMessage");
const resultCount = document.querySelector("#resultCount");
const summaryGrid = document.querySelector("#summaryGrid");
const topButton = document.querySelector("#topButton");

/* =========================================================
   모집구분 표시 순서
   ---------------------------------------------------------
   - 요약 카드와 모집구분 선택 박스가 아래 순서대로 보이도록 지정합니다.
   - 나중에 새 모집구분을 추가하면 이 배열에 원하는 순서로 이름을 추가하세요.
   ========================================================= */
const CATEGORY_ORDER = ["기술행정병", "임기제부사관", "어학병", "전문특기병", "카투사"];

function uniqueValues(data, key) {
  return [...new Set(data.map(item => item[key]).filter(Boolean))].sort();
}

/* 모집구분을 CATEGORY_ORDER 기준으로 정렬합니다. */
function sortCategories(values) {
  return values.sort((a, b) => {
    const indexA = CATEGORY_ORDER.indexOf(a);
    const indexB = CATEGORY_ORDER.indexOf(b);

    if (indexA === -1 && indexB === -1) return a.localeCompare(b, "ko");
    if (indexA === -1) return 1;
    if (indexB === -1) return -1;

    return indexA - indexB;
  });
}

function fillSelect(selectElement, values, defaultLabel) {
  selectElement.innerHTML = `<option value="">${defaultLabel}</option>`;
  values.forEach(value => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    selectElement.appendChild(option);
  });
}


/* =========================================================
   표시용 제한사항 정리
   ---------------------------------------------------------
   - 원문 데이터의 "기타: 치질, 심장질환"처럼 한 칸에 묶인 내용을
     모바일 카드에서는 각각의 칩으로 나누어 보여줍니다.
   - 예: "기타: 치질, 심장질환" → "치질", "심장질환"
   - 예: "색각장애: 색약색맹 제외" → "색약/색맹"
   ========================================================= */
function normalizeLimitText(text) {
  if (!text || text === "-") return [];
  if (text === "해당 제한사항 없음") return [text];

  const cleaned = text
    .replace(/제외/g, "")
    .replace(/제한 사유/g, "")
    .replace(/기타 관련/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (cleaned.startsWith("기타 질환:")) {
    return cleaned
      .replace("기타 질환:", "")
      .replace(/,/g, " ")
      .split(/\s+/)
      .map(value => value.trim())
      .filter(Boolean);
  }

  if (cleaned.startsWith("기타:")) {
    return cleaned
      .replace("기타:", "")
      .split(/[,/]/)
      .map(value => value.trim())
      .filter(Boolean);
  }

  if (cleaned.startsWith("색각장애:")) {
    const value = cleaned.replace("색각장애:", "").replace(/\s+/g, "").trim();

    if (value.includes("색약") && value.includes("색맹")) {
      return ["색약/색맹"];
    }
    if (value.includes("색약")) return ["색약"];
    if (value.includes("색맹")) return ["색맹"];

    return ["색각장애"];
  }

  return [cleaned];
}

function getDisplayLimits(limits) {
  const result = limits.flatMap(normalizeLimitText);
  return [...new Set(result)];
}


/* =========================================================
   2차 심리검사 제한사항 표시 위치 조정
   ---------------------------------------------------------
   - 원문 표의 '2차 심리검사 결과 정밀검사 대상자 제외' 표시는
     비고가 아니라 신체제한 사항 영역에 빨간 칩으로 표시합니다.
   - 비고에 다른 내용이 함께 있는 경우에는 2차 심리검사 문구만 빼고
     나머지 비고는 그대로 보여줍니다.
   ========================================================= */
const PSYCH_NOTE_TEXT = "2차 심리검사 결과 정밀검사 대상자 제외";
const PSYCH_LIMIT_LABEL = "2차 심리검사 결과 정밀검사 대상";

function hasPsychLimit(item) {
  return item.note && item.note.includes(PSYCH_NOTE_TEXT);
}

function getDisplayNote(note) {
  if (!note || note === "-") return "-";

  const cleaned = note
    .replace(PSYCH_NOTE_TEXT, "")
    .replace(/^\s*\/\s*/, "")
    .replace(/\s*\/\s*$/, "")
    .replace(/\s*\/\s*\/\s*/g, " / ")
    .trim();

  return cleaned || "-";
}


function initialize() {
  fillSelect(armyFilter, uniqueValues(SPECIALTY_LIMITS, "army"), "전체");
  fillSelect(categoryFilter, sortCategories(uniqueValues(SPECIALTY_LIMITS, "category")), "전체");
  renderSummary(SPECIALTY_LIMITS);
  applyFilters();
}



/* =========================================================
   모집구분별 요약 카드 표시
   ---------------------------------------------------------
   - 전체 데이터에서 모집구분별 건수를 계산해 카드로 보여줍니다.
   - 카드를 누르면 해당 모집구분으로 필터가 적용됩니다.
   ========================================================= */
function renderSummary(data) {
  const counts = data.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  summaryGrid.innerHTML = sortCategories(Object.keys(counts))
    .map(category => [category, counts[category]])
    .map(([category, count]) => `
      <button type="button" class="summary-card" data-category="${category}">
        <strong>${count}</strong>
        <span>${category}</span>
      </button>
    `)
    .join("");

  document.querySelectorAll(".summary-card").forEach(button => {
    button.addEventListener("click", () => {
      categoryFilter.value = button.dataset.category;
      applyFilters();
      document.querySelector(".filter-card").scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function applyFilters() {
  const army = armyFilter.value;
  const category = categoryFilter.value;
  const keyword = keywordFilter.value.trim().toLowerCase();

  const filtered = SPECIALTY_LIMITS.filter(item => {
    const armyMatch = army ? item.army === army : true;
    const categoryMatch = category ? item.category === category : true;
    const keywordTarget = [
      item.army,
      item.category,
      item.branch,
      item.code,
      item.name,
      item.limits.join(" "),
      item.requirements.join(" "),
      item.note
    ].join(" ").toLowerCase();
    const keywordMatch = keyword ? keywordTarget.includes(keyword) : true;

    return armyMatch && categoryMatch && keywordMatch;
  });

  renderCards(filtered);
}

function renderCards(data) {
  resultCount.textContent = `${data.length}건`;
  if (data.length === 0) {
    cardList.innerHTML = "";
    emptyMessage.classList.add("show");
    return;
  }

  emptyMessage.classList.remove("show");
  cardList.innerHTML = data.map(createCard).join("");
}

/* =========================================================
   신체요건 표시 문구 정리
   ---------------------------------------------------------
   - 원문 데이터는 유지하되 화면 표시만 보기 쉽게 바꿉니다.
   - 예: "체중 60~kg" → "체중 60kg~"
   - 예: "신장 168~cm" → "신장 168cm~"
   - 예: "체중 65~90kg" → "체중 65~90kg"
   ========================================================= */
function formatRequirementText(text) {
  const value = text.trim();

  // 원문처럼 "60~kg"로 들어온 경우, 보기 좋게 "60kg~"로 표시합니다.
  const weightFromMatch = value.match(/^체중\s+(\d+)~kg$/);
  if (weightFromMatch) {
    return `체중 ${weightFromMatch[1]}kg~`;
  }

  // 상한만 있는 경우는 "체중 ~90kg"처럼 유지하되 괄호는 붙이지 않습니다.
  const weightToMatch = value.match(/^체중\s+~(\d+)kg$/);
  if (weightToMatch) {
    return `체중 ~${weightToMatch[1]}kg`;
  }

  // 범위가 있는 경우는 "체중 65~90kg"처럼 유지하되 괄호는 붙이지 않습니다.
  const weightRangeMatch = value.match(/^체중\s+(\d+)~(\d+)kg$/);
  if (weightRangeMatch) {
    return `체중 ${weightRangeMatch[1]}~${weightRangeMatch[2]}kg`;
  }

  // 신장도 체중과 같은 방식으로 정리합니다.
  // 예: "신장 168~cm" → "신장 168cm~"
  const heightFromMatch = value.match(/^신장\s+(\d+)~cm$/);
  if (heightFromMatch) {
    return `신장 ${heightFromMatch[1]}cm~`;
  }

  // 예: "신장 ~190cm" → "신장 ~190cm"
  const heightToMatch = value.match(/^신장\s+~(\d+)cm$/);
  if (heightToMatch) {
    return `신장 ~${heightToMatch[1]}cm`;
  }

  // 예: "신장 175~ 190cm" 또는 "신장 168~203cm" → "신장 175~190cm"
  const heightRangeMatch = value.match(/^신장\s+(\d+)~\s*(\d+)cm$/);
  if (heightRangeMatch) {
    return `신장 ${heightRangeMatch[1]}~${heightRangeMatch[2]}cm`;
  }

  return value;
}

function createCard(item) {
  const branchPill = item.branch ? `<span class="pill gray">병과: ${item.branch}</span>` : "";
  const baseLimitChips = getDisplayLimits(item.limits)
    .map(text => `<span class="chip limit">${text}</span>`)
    .join("");
  const psychLimitChip = hasPsychLimit(item)
    ? `<span class="chip warning-limit">${PSYCH_LIMIT_LABEL}</span>`
    : "";
  const limitChips = [baseLimitChips, psychLimitChip].filter(Boolean).join("");
  const requirementChips = item.requirements.map(formatRequirementText).map(text => `<span class="chip">${text}</span>`).join("");
  const displayNote = getDisplayNote(item.note);

  return `
    <article class="limit-card">
      <div class="limit-card-head">
        <div class="card-meta">
          <span class="pill">${item.army}</span>
          <span class="pill">${item.category}</span>
          ${branchPill}
        </div>
        <h3><small>${item.code}</small>${item.name}</h3>
      </div>

      <div class="limit-card-body">
        <section class="info-block">
          <h4>신체제한 사항</h4>
          <div class="chip-wrap">${limitChips}</div>
        </section>

        <section class="info-block">
          <h4>신체요건</h4>
          <div class="chip-wrap">${requirementChips}</div>
        </section>

        <section class="info-block note-block">
          <h4>비고</h4>
          <p class="note-text">${displayNote}</p>
        </section>
      </div>
    </article>
  `;
}

function resetFilters() {
  // 군 필터는 육군 고정

  armyFilter.value = "";
  categoryFilter.value = "";
  keywordFilter.value = "";
  applyFilters();
  forceArmyLabel();
}

armyFilter.addEventListener("change", applyFilters);
categoryFilter.addEventListener("change", applyFilters);
keywordFilter.addEventListener("input", applyFilters);
resetButton.addEventListener("click", () => { resetFilters(); forceArmyLabel(); if (typeof applyFilters === "function") applyFilters(); if (typeof renderSpecialties === "function") renderSpecialties(); });
topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

initialize();
