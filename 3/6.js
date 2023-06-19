var menuItem=new Object();
{
menuItem.title;
menuItem.url;

function show()
{
document.write("<li><a href="+menuItem.url+">"+menuItem.title+"</a></li>");
}

function menuItem()
{
    this.title="Первая строка";
    this.url="labs-org.ru";
    this.showMenu=show;
}
}

var newMenu=new menuItem();
newMenu.showMenu();
