const form = document.querySelector('form');
const state = document.querySelector('#state');
const date = document.querySelector('#date');
const daily = document.querySelector('.daily');
const total = document.querySelector('.total');
const dailyData = document.querySelectorAll('.daily-data p');
const totalData = document.querySelectorAll('.total-data p');

form.addEventListener('submit', loadData);

function loadData(e){

    const xhr = new XMLHttpRequest();

    // xhr.open('GET','https://api.covid19india.org/v4/min/data.min.json', true)
    xhr.open('GET','https://api.covid19india.org/v4/min/timeseries.min.json', true)

    xhr.onload = function(){
        if(this.status === 200){

            try{
                const data = JSON.parse(this.responseText);
                let reqDailyData = data[state.value].dates[date.value].delta;
                let reqTotalData = data[state.value].dates[date.value].total;
    
                // Display Daily Data
                dailyData.forEach(function(element) {
    
                    if(element.classList.contains('confirmed')){
                        if(reqDailyData.confirmed!==undefined){
                            element.innerHTML = `<p>${reqDailyData.confirmed}</p>`
                        }else{
                            element.innerHTML = `<p>N/A</p>`
                        }
                    }
                    if(element.classList.contains('recovered')){
                        if(reqDailyData.recovered!==undefined){
                            element.innerHTML = `<p>${reqDailyData.recovered}</p>` 
                        }else{
                            element.innerHTML = `<p>N/A</p>`
                        }
                    }
                    if(element.classList.contains('deceased')){
                        if(reqDailyData.deceased!==undefined){
                            element.innerHTML = `<p>${reqDailyData.deceased}</p>`
                        }else{
                            element.innerHTML = `<p>N/A</p>`
                        }
                    }
                    if(element.classList.contains('tested')){
                        if(reqDailyData.tested!==undefined){
                            element.innerHTML = `<p>${reqDailyData.tested}</p>`
                        }else{
                            element.innerHTML = `<p>N/A</p>`
                        }
                    }
                    if(element.classList.contains('vaccinated1')){
                        if(reqDailyData.vaccinated1!==undefined){
                            element.innerHTML = `<p>${reqDailyData.vaccinated1}</p>` 
                        }else{
                            element.innerHTML = `<p>N/A</p>`
                        }
                    }
                    if(element.classList.contains('vaccinated2')){
                        if(reqDailyData.vaccinated2!==undefined){
                            element.innerHTML = `<p>${reqDailyData.vaccinated2}</p>`
                        } else{
                            element.innerHTML = `<p>N/A</p>`
                        }
                    }
                });
    
                // Display Total Data
                totalData.forEach(function(element) {
    
                    if(element.classList.contains('tconfirmed')){
                        if(reqTotalData.confirmed!==undefined){
                            element.innerHTML = `<p>${reqTotalData.confirmed}</p>`
                        }else{
                            element.innerHTML = `<p>N/A</p>`
                        }
                    }
                    if(element.classList.contains('trecovered')){
                        if(reqTotalData.recovered!==undefined){
                            element.innerHTML = `<p>${reqTotalData.recovered}</p>` 
                        }else{
                            element.innerHTML = `<p>N/A</p>`
                        }
                    }
                    if(element.classList.contains('tdeceased')){
                        if(reqTotalData.deceased!==undefined){
                            element.innerHTML = `<p>${reqTotalData.deceased}</p>`
                        }else{
                            element.innerHTML = `<p>N/A</p>`
                        }
                    }
                    if(element.classList.contains('ttested')){
                        if(reqTotalData.tested!==undefined){
                            element.innerHTML = `<p>${reqTotalData.tested}</p>`
                        }else{
                            element.innerHTML = `<p>N/A</p>`
                        }
                    }
                    if(element.classList.contains('tvaccinated1')){
                        if(reqTotalData.vaccinated1!==undefined){
                            element.innerHTML = `<p>${reqTotalData.vaccinated1}</p>` 
                        }else{
                            element.innerHTML = `<p>N/A</p>`
                        }
                    }
                    if(element.classList.contains('tvaccinated2')){
                        if(reqTotalData.vaccinated2!==undefined){
                            element.innerHTML = `<p>${reqTotalData.vaccinated2}</p>`
                        } else{
                            element.innerHTML = `<p>N/A</p>`
                        }
                    }
                });

            }
            catch(err){
                alert("Data Not Available");
            }

        }
    }

    xhr.send();



    e.preventDefault();
}