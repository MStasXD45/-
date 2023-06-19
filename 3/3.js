var tour=new Object();
{
    tour.name;
    tour.peopleAmount;
    tour.daysAmount;
    tour.tarif;

    function tour(name, peopleAmount,daysAmount,tarif)
    {
          this.name="";
          this.peopleAmount="0";
          this.daysAmount="0";
          this.tarif="0";
          this.tourPrice= price;
    }

    function price()
    {
        var price1=this.peopleAmount*this.daysAmount*this.tarif;
        console.log("Цена:"+price1+" грн.");
        return;
    }


}

var newTour= new tour();
newTour.name="Карпатский поход";
newTour.peopleAmount=15;
newTour.daysAmount=6;
newTour.tarif=1.3;
console.log(newTour.name+", "+newTour.peopleAmount+" чел., "+newTour.daysAmount+" дней, "+newTour.tarif+" грн.")
newTour.tourPrice();
