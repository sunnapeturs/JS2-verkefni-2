//const dates = ["mánudagur","Þriðjudagur","Miðvikudagur","Fimmtudagur","Föstudagur","Laugardagur","Sunnudagur"];

window.addEventListener("load", ()=> {
        const whatIsThis = fetch("https://apis.is/concerts")         
        .then((results)=>{
            return results.json();
        })
        .then((json)=>{
            console.log(json.results);
            for(var i = 0; i < json.results.length; i ++){  
            document.getElementById('main').innerHTML += `
            <div class="card">
                <div>${json.results[i].dateOfShow}</div>
                <div>${json.results[i].eventDateName}</div>
                <div>${json.results[i].eventHallName}</div>
                <img src="${json.results[i].imageSource}"></img>
                <div>${json.results[i].eventHallName}</div>
                <div>${json.results[i].userGroupName}</div>
            </div>   
    `
            }
         })
    })
    

