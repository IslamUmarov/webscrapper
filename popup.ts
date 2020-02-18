const evalButton = document.getElementById("buttonInspect");
const inspectString = "inspect(document.querySelector('h1'))";



function handleError(error) {
  if (error.isError) {
    console.log(`Devtools error: ${error.code}`);
  } else {
    console.log(`JavaScript error: ${error.value}`);
  }
}

function handleResult(result) {
  if (result[1]) {
    handleError(result[1]);
  }
}


function getMyElemen(id){
  var vk = document.getElementsByClassName(id);
  for(i = 0; i<vk.length; i++){
    vk.item(i).style.background = 'yellow';
    }
}

evalButton.onclick = function () {
  var id = document.getElementById('domId').value;
  getMyElemen(id);
};