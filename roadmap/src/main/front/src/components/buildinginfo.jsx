const LocList = () =>{
    const loc =[
        {
            "code": "R20",
            "id": "가든쿡",
            "Lat": 37.55789721,
            "Lng": 127.0033455,
            "facilities": [0,1,0,0,0,0,0,0,0],
            "explain": "맛있는 식당입니다!",
            "image": ""
        },
        {
            "code": "R49C",
            "id": "가온누리",
            "Lat": 37.558199,
            "Lng": 126.999369,
            "facilities": [1,0,0,0,0,0,0,0,0],
            "explain": "중앙도서관 앞 카페입니다!",
            "image": "R49.jpg"
        },
        {
            "code": "MK",
            "id": "경영관",
            "Lat": 37.55704307485881,
            "Lng": 127.00292446195459,
            "facilities": [0,0,0,0,1,0,1,0,0],
            "explain": "열람실(비즈마루): 지하1층" +
                "복사기: 1층",
            "image": ""
        },
        {
            "code": "XA",
            "id": "계산관A",
            "Lat": 37.560443,
            "Lng": 126.999175,
            "facilities": [0,0,0,0,0,0,0,0,0],
            "explain": "",
            "image": "XA.jpg"
        },
        {
            "code": "X",
            "id": "계산관B",
            "Lat": 37.560092080451604,
            "Lng": 126.99890894109868,
            "facilities": [0,0,0,0,0,0,0,0,0],
            "explain": "",
            "image": "XB.jpg"
        },
        {
            "code": "W",
            "id": "과학관",
            "Lat": 37.557309806246856,
            "Lng": 126.99988682382434,
            "facilities": [0,0,0,0,1,1,1,0],
            "explain": "복사기: 1층" +
                "유인복사실: 야외 교재실" +
                "제세동기: 1층",
            "image": "W0.jpg"
        },
        {
            "code": "R18C",
            "id": "그루터기",
            "Lat": 37.55698903,
            "Lng": 127.0023178,
            "facilities": [1,0,0,0,0,0,0,0,0],
            "explain": "음료를 마실 수 있는 카페입니다.",
            "image": "R18.jpg"
        },
        {
            "code": "F",
            "id": "다향관",
            "Lat": 37.55870454949439,
            "Lng": 127.0003621705126,
            "facilities": [0,0,1,0,0,0,0,0,0],
            "explain": "다향관 1층에 각종 문구류와 책을 살 수 있습니다.",
            "image": "F0.jpg"
        },
        {
            "code": "G2",
            "id": "대운동장",
            "Lat": 37.55650971868976,
            "Lng": 127.00066999579639,
            "facilities": [0,0,0,0,0,0,0,0,0],
            "explain": "",
            "image": ""
        },
        {
            "code": "D7",
            "id": "동대입구역",
            "Lat": 37.5588954562317,
            "Lng": 127.004984384394,
            "facilities": [0,0,0,0,0,0,0,0,0],
            "explain": "",
            "image": "D7.jpg"
        },
        {
            "code": "D5",
            "id": "듀이카 출구",
            "Lat": 37.559890259237434,
            "Lng": 127.00083300537905,
            "facilities": [0,0,0,0,0,0,0,0,0],
            "explain": "",
            "image": "D5.jpg"
        },
        {
            "code": "BM",
            "id": "만해관",
            "Lat": 37.55761614,
            "Lng": 127.0008737,
            "facilities": [0,0,0,0,0,0,1,0,0],
            "explain": "복사기: 2층",
            "image": ""
        },
        {
            "code": "A",
            "id": "명진관",
            "Lat": 37.55769182916527,
            "Lng": 126.99996831050905,
            "facilities": [0,0,0,0,0,0,1,0,0],
            "explain": "복사기: 1층",
            "image": ""
        },
        {
            "code": "K",
            "id": "문화관",
            "Lat": 37.55758006,
            "Lng": 127.0031101,
            "facilities": [0,0,0,1,0,1,1,0,1],
            "explain": "ATM(신한): 1층, " +
                "제세동기: 1층, " +
                "복사기: 1층, " +
                "증명서자동발급기: 1층",
            "image": "K2.jpg"
        },
        {
            "code": "BB",
            "id": "법학관",
            "Lat": 37.558066640598234,
            "Lng": 127.00090089146994,
            "facilities": [0,0,1,0,0,1,0,0,0],
            "explain": "제세동기: 1층, " +
                "편의점: 2층",
            "image": ""
        },
        {
            "code": "N",
            "id": "본관",
            "Lat":  37.55852434954834,
            "Lng": 126.99949748962393,
            "facilities": [0,0,0,0,0,1,0,0,0],
            "explain": "제세동기: 3층, ",
            "image": "N2.jpg"
        },
        {
            "code": "R76C",
            "id": "블루팟",
            "Lat": 37.55893880876175,
            "Lng": 126.99964235549915,
            "facilities": [1,0,0,0,0,0,0,0,0],
            "explain": "음료를 마실 수 있는 카페입니다.",
            "image": "R76.jpg"
        },
        {
            "code": "M",
            "id": "사회과학관",
            "Lat": 37.55757647341498,
            "Lng": 127.00257589893737,
            "facilities": [0,0,0,0,1,1,1,1,1],
            "explain": "열람실(능금): 2층, " +
                "제세동기: 2층, " +
                "복사기: 2층, " +
                "유인복사실: 2층, " +
                "증명서자동발급기: 3층",
            "image": ""
        },
        {
            "code": "FF",
            "id": "상록원",
            "Lat": 37.556999862466405,
            "Lng": 126.99958351339863,
            "facilities": [0,1,1,1,0,0,0,0,0],
            "explain": "식당: 1층(솥앤누들, 버거킹), 2층(상록원 학생식당), 3층(교직원 식당)" +
                "ATM(신한, 국민): 1층" +
                "편의점: 1층",
            "image": ""
        },
        {
            "code": "I",
            "id": "신공학관",
            "Lat": 37.55807384209792,
            "Lng": 126.99846984248175,
            "facilities": [1,1,1,1,0,0,1,0,0],
            "explain": "카페(폴바셋): 1층" +
                "식당: 1층" +
                "편의점: 1층" +
                "ATM(신한): 1층" +
                "복사기: 3층, 9층",
            "image": "I1.jpg"
        },
        {
            "code": "D1",
            "id": "신공학관 출구",
            "Lat": 37.558331,
            "Lng": 126.99766,
            "facilities": [0,0,0,0,0,0,0,0,0],
            "explain": "",
            "image": ""
        },
        {
            "code": "E",
            "id": "원흥관",
            "Lat": 37.558906368112204,
            "Lng": 126.99888179552639,
            "facilities": [1,0,1,0,1,0,1,0,0],
            "explain": "",
            "image": "E1.jpg"
        },
        {
            "code": "D8",
            "id": "장충공원 1",
            "Lat": 37.55834045511467,
            "Lng": 127.0046629226596,
            "facilities": [0,0,0,0,0,0,0,0,0],
            "explain": "",
            "image": "D8.jpg"
        },
        {
            "code": "D9",
            "id": "장충공원 2",
            "Lat": 37.55738544,
            "Lng": 127.0034994,
            "facilities": [0,0,0,0,0,0,0,0,0],
            "explain": "",
            "image": ""
        },
        {
            "code": "Y",
            "id": "정각원",
            "Lat": 37.5574611679436,
            "Lng": 127.00118156166387,
            "facilities": [0,0,0,0,0,0,0,0,0],
            "explain": "",
            "image": "Y0.jpg"
        },
        {
            "code": "D0",
            "id": "정문",
            "Lat": 37.55660338,
            "Lng": 127.0032232,
            "facilities": [0,0,0,0,0,0,0,0,0],
            "explain": "",
            "image": ""
        },
        {
            "code": "D2",
            "id": "정보문화관 출구 1",
            "Lat": 37.559552,
            "Lng": 126.998305,
            "facilities": [0,0,0,0,0,0,0,0,0],
            "explain": "",
            "image": ""
        },
        {
            "code": "D3",
            "id": "정보문화관 출구 2",
            "Lat": 37.559841,
            "Lng": 126.99805,
            "facilities": [0,0,0,0,0,0,0,0,0],
            "explain": "",
            "image": "D3.jpg"
        },
        {
            "code": "P",
            "id": "정보문화관P",
            "Lat": 37.55962355851048,
            "Lng": 126.99857846327879,
            "facilities": [0,0,0,0,0,0,1,0,0],
            "explain": "복사기: 3층",
            "image": ""
        },
        {
            "code": "Q",
            "id": "정보문화관Q",
            "Lat": 37.55987223060984,
            "Lng": 126.9983430440475,
            "facilities": [0,0,0,0,0,0,0,0,0],
            "explain": "",
            "image": ""
        },
        {
            "code": "S",
            "id": "조소실습장",
            "Lat": 37.55602677,
            "Lng": 127.0018244,
            "facilities": [0,0,0,0,0,0,0,0,0],
            "explain": "",
            "image": "S0.jpg"
        },
        {
            "code": "C",
            "id": "중앙도서관",
            "Lat": 37.55797294,
            "Lng": 126.9990538,
            "facilities": [0,0,1,0,1,0,1,1,1],
            "explain": "편의점: 4층" +
                "열람실: 도서관 전체" +
                "복사기: 지하2층, 지하1층, 1층, 3층, 4층" +
                "유인복사실: 지하1층" +
                "증명서자동발급기: 2층",
            "image": "C0.jpg"
        },
        {
            "code": "G",
            "id": "체육관",
            "Lat": 37.559828994079886,
            "Lng": 127.00026710476699,
            "facilities": [0,0,0,0,0,0,0,0,0],
            "explain": "",
            "image": "G0.jpg"
        },
        {
            "code": "OO",
            "id": "팔정도",
            "Lat": 37.558257,
            "Lng": 127.000181,
            "facilities": [0,0,0,0,0,0,0,0,0],
            "explain": "",
            "image": "O0.jpg"
        },
        {
            "code": "J",
            "id": "학림관",
            "Lat": 37.56027949267652,
            "Lng": 126.99979627479863,
            "facilities": [0,0,1,1,1,1,1,0,1],
            "explain": "편의점: 지하1층" +
                "ATM(신한): 1층" +
                "열람실(라운지 샘): 1층" +
                "제세동기: 1층" +
                "복사기: 1층, 2층" +
                "증명서자동발급기: 1층",
            "image": "J.jpg"
        },
        {
            "code": "Z",
            "id": "학생회관",
            "Lat": 37.560110094245076,
            "Lng": 126.99837472929515,
            "facilities": [0,0,0,0,1,0,1,0,0],
            "explain": "열람실(i space): 1층, " +
                "복사기: 1층",
            "image": ""
        },
        {
            "code": "L",
            "id": "학술관",
            "Lat": 37.55804496593563,
            "Lng": 127.00357640228633,
            "facilities": [1,0,0,0,0,0,1,0,0],
            "explain": "카페(두리터): 지하1층, " +
                "복사기: 1층",
            "image": ""
        },
        {
            "code": "H",
            "id": "혜화관",
            "Lat": 37.55761974,
            "Lng": 127.0017837,
            "facilities": [1,0,1,1,1,0,1,0,0],
            "explain": "카페(무인카페): 1층" +
                "편의점: 4층" +
                "ATM(국민): 1층" +
                "열람실: 1층 라운지" +
                "복사기: 1층",
            "image": ""
        },
        {
            "code": "R19C",
            "id": "Ing 카페",
            "Lat": 37.55723411,
            "Lng": 127.0016976,
            "facilities": [1,0,0,0,0,0,0,0,0],
            "explain": "음료를 마실 수 있는 카페입니다.",
            "image": "R19.jpg"
        },
        {
            "code": "D6",
            "id": "혜화문(중문)",
            "Lat": 37.55876577,
            "Lng": 127.0034814,
            "facilities": [0,0,0,0,0,0,0,0,0],
            "explain": "",
            "image": "D6.jpg"
        },
        {
            "code": "T",
            "id": "혜화별관",
            "Lat": 37.55743233202582,
            "Lng": 127.00153014440032,
            "facilities": [0,0,0,0,0,0,0,0,0],
            "explain": "",
            "image": "T0.jpg"
        },
        {
            "code": "D4",
            "id": "후문",
            "Lat": 37.560692,
            "Lng": 126.999335,
            "facilities": [0,0,0,0,0,0,0,0,0],
            "explain": "",
            "image": "D4.jpg"
        }
    ];



    return loc;
}

export default LocList;