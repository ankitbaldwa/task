function amount(amt){
    //alert(amt);
    //document.getElementsByClassName("tot-amt").innerHTML = 'Total: '+amt+' USD';
    document.getElementsByClassName("tot-amt")[0].textContent = 'Total: '+amt.toFixed(2)+' USD';
}