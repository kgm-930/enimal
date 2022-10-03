import React,{useState} from 'react';

function Page() {
  const [now,setNow] = useState(1);
  const [page,setPage] = useState(1);

  function leftbutton(e){
    e.preventDefault();
    if (page !== 1) {
      setPage(pre=>pre-1)
    }
  }
  function rightbutton(e){
    e.preventDefault();
    setPage(pre=>pre+1)
    setNow(1)
  }
  function numberbutton(e){
    e.preventDefault();
    const A = parseInt((page-1)*5,10)
    const B = parseInt(e.target.id,10)
    setNow(A+B)
  }
  console.log(now)


  
  return (
    <div>
      <button type='button' onClick={e=>leftbutton(e)}>한칸뒤로 버튼</button>
      <button type='button' id={1} onClick={e=>numberbutton(e)} >{(page-1)*5+1}</button>
      <button type='button' id={2} onClick={e=>numberbutton(e)} >{(page-1)*5+2}</button>
      <button type='button' id={3} onClick={e=>numberbutton(e)} >{(page-1)*5+3}</button>
      <button type='button' id={4} onClick={e=>numberbutton(e)} >{(page-1)*5+4}</button>
      <button type='button' id={5} onClick={e=>numberbutton(e)} >{(page-1)*5+5}</button>
      <button type='button' onClick={e=>rightbutton(e)}>한칸앞으로 가는버튼</button>
    </div>
  );
}

export default Page;