let recipes = []
let drivelink = []
const recipesfromls = JSON.parse(localStorage.getItem("places"))
const drivelinksfromls = JSON.parse(localStorage.getItem("drivelink"))
const irecipe = document.getElementById("place")
const ilink = document.getElementById("dlink")
const save = document.getElementById("save")
// const savetab = document.getElementById("savetab")
const deletetb = document.getElementById("deletetb")
const val = document.getElementById("values");

if(recipesfromls){
    recipes = recipesfromls
    drivelink = drivelinksfromls
    render(recipes, drivelink)

}
function render(recipes, drivelink){
    let items = ""
    for(let i = 0; i < recipes.length; i++){
        items += `
          <tr>
          
             <td class="tdel"><b>Recipe: &nbsp<b>${recipes[i]}</b></td>
             <td>&nbsp&nbsp&nbsp&nbsp&nbsp <b> Link:</b>&nbsp <a target = '_blank' href=${drivelink[i]}>${drivelink[i]}</a></td>
          </tr>
        `
    }
    val.innerHTML = items
}
// savetab.addEventListener("click", function(){    
//     chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
//         ilink.value = tabs[0].url
//         // myLeads.push(tabs[0].url)
//         // localStorage.setItem("myLeads", JSON.stringify(myLeads) )
//         // render(myLeads)
//     })
// })
deletetb.addEventListener("dblclick", function() {
    localStorage.clear()
    recipes = []
    drivelink = []
    render(recipes, drivelink)
})

save.addEventListener("click", function(){
    recipes.push(irecipe.value)
    drivelink.push(ilink.value)
    irecipe.value = ""
    ilink.value = ""
    localStorage.setItem("places",JSON.stringify(recipes))
    localStorage.setItem("drivelink",JSON.stringify(drivelink))
    render(recipes,drivelink)
})