var deger;
document.getElementById("onayla_button").disabled = true;
function tikla(a)
{
    document.getElementById("tas").style.visibility="hidden";
    document.getElementById("makas").style.visibility="hidden";
    document.getElementById("kagit").src='images/'+a+'.png';
    document.getElementById("onayla_button").disabled = false;
    deger = a;
}
function calis()
{
    var a = Math.round(Math.random() * 2 ); // en yakın sayıya yuvarlar
    var botdeger; 
    if(a==0)
    {
        botdeger = "tas";
    }
    else if(a==1)
    {
        botdeger = "kagit";
    }
    else if(a==2)
    {
        botdeger = "makas";
    }
    //botun resmi koy
    document.getElementById("bot_resim").src="images/"+botdeger+".png";

    //kazananı belirle
   
    if(botdeger==deger)
    {
        alert("berabere");
        document.getElementById("sol").style.backgroundColor = 'orange';
        document.getElementById("sag").style.backgroundColor = 'orange';
    }
    else if(botdeger=="tas")
    {  
        if(deger=="makas")
        {
            alert("bot kazandı");
            document.getElementById("sol").style.backgroundColor = 'red';
            document.getElementById("sag").style.backgroundColor = 'green';
        }
        else if(deger == "tas")
        {
            alert("kazandın");
            document.getElementById("sol").style.backgroundColor="green";
            document.getElementById("sag").style.backgroundColor = 'red';
        }

    }
    else if(botdeger == "kagit")
    {
        if(deger == "makas")
        {
            alert("kazandın");
            document.getElementById("sol").style.backgroundColor = 'green';
            document.getElementById("sag").style.backgroundColor = 'red';
        }
        else if(deger == "tas")
        {
            alert("bot kazandı");
            document.getElementById("sol").style.backgroundColor = 'red';
            document.getElementById("sag").style.backgroundColor = 'green';
         
        }
    }
    else if(botdeger == "makas")
    {
        if(deger == "tas")
        {
            alert("kazandın");
            document.getElementById("sol").style.backgroundColor="green";
            document.getElementById("sag").style.backgroundColor = 'red';
        }
        else if(deger == "kagit")
        {
            alert("bot kazandı");
            document.getElementById("sol").style.backgroundColor = 'red';
            document.getElementById("sag").style.backgroundColor = 'green';
           
        }
    }

    console.log(deger);
   
}