const $body = document.querySelector('body');
const $mMenu = document.querySelector('.mob_btn');
const $topBtn = document.querySelector('.scrollTop_btn');

window.addEventListener('scroll', ()=>{
  let scroll = window.scrollY; //얼마나 스크롤 됐는지 수치 구함
  if( scroll > 62 ){
    $body.classList.add('scrolling')
    $topBtn.classList.add('on')

  } else {
    $body.classList.remove('scrolling')
    $topBtn.classList.remove('on')
  }
})

//scrollTop버튼 클릭하면 화면 제일 위로
$topBtn.addEventListener('click', ()=>{
  window.scrollTo({
    top:0,
    behavior:"smooth"
  });
})

$mMenu.addEventListener('click',(e)=>{
  e.preventDefault();
  /* 
  if($body.classList.contains('mOpen')){
    $body.classList.remove('mOpen','scrolling')
  } else {
  $body.classList.add('mOpen','scrolling') }

  간단하게 toggle 쓰면됨!!
  */
  $body.classList.toggle('mOpen')
})

// 0
function section0(){
  const tl = gsap.timeline(); //하나씩 애니메이션을 작동하게 함
  tl.to('#section0 .tit_wrap > *' , { //GSAP은 qureySelector로 가져오지 않아도 사용할 수 있음!
    opacity:1,
    duration:1.5, //속도. Default : 0.5s
    stagger: 0.3, //시차
    y: -30, //아래에서부터 올라옴. 단위 px이면 안적어도 무관
  }) 

  gsap.to('#section0 .scroll', {
    opacity:1,
    duration:3
  })
}
section0();

//1
function section1(){
  const tl = gsap.timeline();

  tl.to('#section1 .tit', { //형제관계가 아니어도 같은 객체에 입력하면 시간차를 줄수있다.
    opacity:1,
    duration:0.5, 
    y: -30 
  })

  
  tl.to('.s1_list li' , {
    opacity:1,
    duration:1,
    stagger: 0.2,
    y: -30
  }) 

  tl.to('#section1 .sub_txt_wrap', {
    opacity:1,
    duration:0.5, 
    y: -30 
  });

      const countElements = document.querySelectorAll('.count');
      
      // 각 .count 요소에 대해 반복
      countElements.forEach(countElement => {
        // 해당 요소의 data-count 속성 값을 가져와 정수로 변환하여 목표 값으로 설정
        const targetCount = parseInt(countElement.dataset.count);
        const updateInterval = 50; // milliseconds (애니메이션 업데이트 간격)
        
        let currentCount = 0; // 애니메이션 중 현재 카운트 값
        // 부드러운 애니메이션을 위해 카운트를 목표 값까지 등분하여 증가시킬 값 계산
        const increment = Math.ceil(targetCount / (2000 / updateInterval));
        
        // 카운트를 업데이트하고 화면에 표시하는 함수
        const updateCount = () => {
          currentCount += increment; // 증가시킬 값을 더함
          if (currentCount >= targetCount) {
            currentCount = targetCount; // 목표 값에 도달하면 현재 카운트 값을 목표 값으로 설정
            clearInterval(interval); // 애니메이션 종료를 위해 interval 삭제
          }
          // 쉼표를 포함하여 숫자를 표시하는 형식으로 현재 카운트 값을 설정
          countElement.textContent = currentCount.toLocaleString();
        };
        
        // updateInterval마다 updateCount 함수를 호출하여 애니메이션 업데이트
        const interval = setInterval(updateCount, updateInterval);
    });
}
section1();

//2
function section2(){
    const tl = gsap.timeline();
  
    tl.to('#section2 .tit_wrap > *', {
      opacity:1,
      duration:1.0, 
      stagger: 0.3,
      y: -30 
    })

    tl.to('.s2_card', {
      opacity:1,
      duration:1, 
      stagger: 0.3,
      y: -30 
    })
}
section2();

//3
function section3(){
  const tl = gsap.timeline();

  tl.to('#section3 .s3_slide > .row', {
    opacity:1,
    duration:1.0, 
    stagger: 0.3,
    y: -30 
  })
}
section3();

//4
function section4(){
  const tl = gsap.timeline();
  // tl.to('#section4 .tit_wrap > *', {
  //   opacity:1,
  //   duration:1.0, 
  //   stagger: 0.3,
  //   y: -30 
  // })

  tl.to('#section4 .img_wrap > .deco', {
    opacity:1,
    duration:1.0, 
    stagger: 0.3,
    y: -30 
  })
}
section4();

//5
function section5(){
  const tl = gsap.timeline();
  tl.to('#section5 .tit_wrap > *', {
    opacity:1,
    duration:1.0, 
    stagger: 0.3,
    y: -30 
  })

  tl.to('#section5 .img_wrap > .deco', {
    opacity:1,
    duration:1.0, 
    stagger: 0.3,
    y: -30 
  })

  tl.to('#section5 .con_btn' , {
    opacity:1,
    duration:0.8, 
    y: -30 
  })
}
section5();

//6
function section6(){
  const tl = gsap.timeline();
  tl.to('#section6 .tit_wrap > *', {
    opacity:1,
    duration:1.0, 
    stagger: 0.3,
    y: -30 
  })

  tl.to('#section6 .img_wrap > *', {
    opacity:1,
    duration:0.8, 
    stagger: 0.1,
    y: -30 
  })

  tl.to('#section6 .con_btn' , {
    opacity:1,
    duration:0.8, 
    y: -30 
  })
}
section6();

//7
function section7(){
  const tl = gsap.timeline();
  tl.to('#section7 .tit_wrap > *', {
    opacity:1,
    duration:1.0, 
    y: -30 
  })

  tl.to('#section7 .s7_list > li', {
    opacity:1,
    duration:1, 
    stagger: 0.3,
    y: -30 
  })
}
section7();





const sections = document.querySelectorAll('section');
//IntersectionObserver를 이용하여 화면을 내릴때 애니메이션이 작동되도록 설정.

const io = new IntersectionObserver((entries, observer)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      console.log(entry.target.id) //내가 보고있는 section의 id만 인식
    }
  })
})

sections.forEach( section => io.observe(section))
// forEach를 이용하여 관찰할 대상(각각의 section) 등록