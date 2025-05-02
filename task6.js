const DarkMode=()=>{
    document.getElementsByClassName('one')[0].style.backgroundColor="black";
    document.getElementsByClassName('one')[0].style.color="white";
}
function LightMode(){
    document.getElementsByClassName('one')[0].style.backgroundColor="white";
    document.getElementsByClassName('one')[0].style.color="black";
}

/*<script>
    const DarkMode=()=>{
        document.getElementsByClassName('one')[0].classList.add('two');
    }
    const LightMode=()=>{
        document.getElementsByClassName('one')[0].classList.remove('two');
    }

</script>*/