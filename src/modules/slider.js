const Slider = () => {
  console.log("File Working")

  let navigationBar = document.querySelector('.navbar');
  console.log(navigationBar)
  document.querySelectorAll('.page').forEach(element => {
    console.log(element)
    //lement.style.marginTop = navigationBar.scrollHeight + "px"
  })

}


export default Slider