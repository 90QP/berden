const nextBtns = document.querySelectorAll('.s3_slide .arrow.right')
const prevBtns = document.querySelectorAll('.s3_slide .arrow.left')
const rowInner = document.querySelectorAll('.s3_slide .row_inner')

nextBtns.forEach((nextBtn)=>{
  nextBtn.addEventListener('click',function(e){
    e.preventDefault();

    const slieder = e.target.parentElement
    //클릭한 next버튼의 부모 El(div)를 변수로 지정.
    if (slieder.classList.contains('row1')){
      nextFunc(0);
    } else if (slieder.classList.contains('row2')){
      nextFunc(1);
    }
  })
})
prevBtns.forEach((prevBtn)=>{
  prevBtn.addEventListener('click',function(e){
    e.preventDefault();

    const slieder = e.target.parentElement
    //클릭한 next버튼의 부모 El(div)를 변수로 지정.
    if (slieder.classList.contains('row1')){
      prevFunc(0);
    } else if (slieder.classList.contains('row2')){
      prevFunc(1);
    }
  })
})

function nextFunc(i){
  //console.log('넥스트함수입니다. 받아온 인자는? : ', i)
  //index Number를 foreach문에서 인자로 받아온다.

  //이미지를 array로 받아옴!
  //findIndex는 array여야만 사용가능하므로 array로 만들어줘야함
  //const imgs = rowInner[i].querySelectorAll('img') : array가 아닌 nodelist(단순묶음)
  const imgs = Array.from(rowInner[i].querySelectorAll('img'))

  //findIndex를 이용하여 active클라스를 가지고있는 index를 찾음
  let index = imgs.findIndex((img)=>{
    return img.classList.contains('active');
  })
  console.log('active클라스가 있는 이미지는? : ', index)
  imgs[index].classList.remove('active');
  index++;
  if(index === imgs.length){index = 0;}
  imgs[index].classList.add('active');
}
function prevFunc(i){
  const imgs = Array.from(rowInner[i].querySelectorAll('img'))
  let index = imgs.findIndex((img)=>{
    return img.classList.contains('active');
  })
  console.log('active클라스가 있는 이미지는? : ', index)

  imgs[index].classList.remove('active');
  index--;
  if(index < 0){index = imgs.length - 1;}
  imgs[index].classList.add('active');
}


const scrollMouse = document.querySelector('scroll')
