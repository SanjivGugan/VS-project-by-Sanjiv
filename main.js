var images = ["familybook.jpg","dad.jpg","mom.jpg","me.jpg","bro.jpg"];
var names = ["My Family Book","Venkatesh","Priya","Sanjiv","Daksh"];

var i = 0;
function next()
{
    i++;
    var numbers_of_family_member_in_array = 5
    if(i > numbers_of_family_member_in_array)
    {
        i = 0;
    }
    var updateImage = images[i];
    var updateNames = names[i];
    document.getElementById("family_member_image").src = updateImage;
    document.getElementById("family_member_name").src = updateNames;
}