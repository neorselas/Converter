
function overall(){
    let value = document.getElementById('category').value;
    // console.log(value);
    if (value == "mass"){

        let unit = document.getElementById('heading');
        unit.textContent = "Mass Converter";

        let unit1 = document.getElementById('label1');
        unit1.textContent = "Grams";

        let unit2 = document.getElementById('label2');
        unit2.textContent = "Kilograms";

        let unit3 = document.getElementById('label3');
        unit3.textContent = "MilliGrams";
        
        let unit4 = document.getElementById('label4');
        unit4.textContent = "Ton (Metric)";
    }
            
    else if (value == "length"){

        let unit = document.getElementById('heading');
        unit.textContent = "Length Converter";

        let unit1 = document.getElementById('label1');
        unit1.textContent = "Meters";

        let unit2 = document.getElementById('label2');
        unit2.textContent = "KiloMeter";

        let unit3 = document.getElementById('label3');
        unit3.textContent = "MilliMeter";

        let unit4 = document.getElementById('label4');
        unit4.textContent = "MegaMeter";
    }

    else if (value == "volume"){

        let unit = document.getElementById('heading');
        unit.textContent = "Volume Converter";

        let unit1 = document.getElementById('label1');
        unit1.textContent = "Liter";

        let unit2 = document.getElementById('label2');
        unit2.textContent = "Cubic Meter";

        let unit3 = document.getElementById('label3');
        unit3.textContent = "Cubic Centimeter";

        let unit4 = document.getElementById('label4');
        unit4.textContent = "MegaLiter";
    }
}


function g() {
    let a = document.getElementById('input1').value;	    
    let b = document.getElementById('input2');	
    let c = document.getElementById('input3');	
    let d = document.getElementById('input4');	
    let e = (a / 1000);    
    let f = (a * 1000);    
    let g = (a / 1000000);    

    b.value = e;
    c.value = f;
    d.value = g;
} 

function kg_g(){
    let aa = document.getElementById('input1');	    
    let bb= document.getElementById('input2').value;	
    let cc= document.getElementById('input3');	
    let dd= document.getElementById('input4');	
    let ee = (bb * 1000);    
    let ff = (bb * 1000000);    
    let gg = (bb / 1000);    

    aa.value = ee;
    cc.value = ff;
    dd.value = gg;

}

function kg_mg(){
    let aaa = document.getElementById('input1');	    
    let bbb= document.getElementById('input2');	
    let ccc= document.getElementById('input3').value;	
    let ddd= document.getElementById('input4');	
    let eee = (ccc / 1000);    
    let fff = (ccc / 1000000);    
    let ggg = (ccc / 1000000000);    

    aaa.value = eee;
    bbb.value = fff;
    ddd.value = ggg;

}

function kg_ton(){
    let aaaa = document.getElementById('input1');	    
    let bbbb= document.getElementById('input2');	
    let cccc= document.getElementById('input3');	
    let dddd= document.getElementById('input4').value;	
    let eeee = (dddd * 1000000);    
    let ffff = (dddd * 1000);    
    let gggg = (dddd * 1000000000);    

    aaaa.value = eeee;
    bbbb.value = ffff;
    cccc.value = gggg;

}


function reset(){
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("input3").value = "";
    document.getElementById("input4").value = "";
}
