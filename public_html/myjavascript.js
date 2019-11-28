var slideIndexVA = 0;
UOWSCSlideshowVA();

function UOWSCSlideshowVA() {
    var i;
    var x = document.getElementsByClassName("UOWSCSlidesVA");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndexVA++;
    if (slideIndexVA > x.length) {slideIndexVA = 1} 
    x[slideIndexVA-1].style.display = "block"; 
    setTimeout(UOWSCSlideshowVA, 3000); // Change image every 3 seconds
}

var slideIndexBG = 0;
UOWSCSlideshowBG();

function UOWSCSlideshowBG() {
    var i;
    var x = document.getElementsByClassName("UOWSCSlidesBG");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndexBG++;
    if (slideIndexBG > x.length) {slideIndexBG = 1} 
    x[slideIndexBG-1].style.display = "block"; 
    setTimeout(UOWSCSlideshowBG, 4000); // Change image every 4 seconds
}

function submitComments()
{
        if (document.comments.feedback.value != "")
        {
            alert("Thank you for your feedback! Have a nice day! :)");
            document.comments.feedback.focus();
            return true;
        }
        else
        {
            alert("Please provide us with your feedback!");
            return false;
        }
}
    
function validateContactForm() 
    {
        if (document.contactUs.cname.value == "")
        {
            alert("Please provide your name!");
            document.contactUs.cname.focus();
            return false;
        }
                           
        if (document.contactUs.ccourse.value == "-1")
        {
            alert("Please provide your course!");
            document.contactUs.ccourse.focus();
            return false;
        }
        
        if (isNaN(document.contactUs.cphonenumber.value) ||
                document.contactUs.cphonenumber.value.length != 8)
        {
            alert("Please provide a valid phone number in a format 81234567 or 91234567!");
            document.contactUs.cphonenumber.focus();
            return false;
        }
        
        if (document.contactUs.cemail.value == "-1")
        {
            alert("Please provide your email!");
            document.contactUs.cemail.focus();
            return false;
        }
        
         var emailID = document.contactUs.cemail.value;
         atpos = emailID.indexOf("@");
         dotpos = emailID.lastIndexOf(".");
         
         if (atpos < 1 || ( dotpos - atpos < 2 )) 
         {
            alert("Please enter correct email ID")
            document.contactUs.cmail.focus() ;
            return false;
         }
                            
        if (document.contactUs.csubject.value == "")
        {
            alert("Please provide your subject message!");
            document.contactUs.csubject.focus();
            return false;
        }
                                       
        if (document.contactUs.cquestion.value == "")
        {
            alert("Please provide your question!");
            document.contactUs.cquestion.focus();
            return false;
        }

        alert("Thank you for enquiry! Please give us two \n\
               working days to get back to you! :)");
        return true;
    }
    
    function validateElectionForm()
    {
        if (document.electUs.ecourse.value == "-1")
        {
            alert("Please provide your course!");
            document.electUs.ccourse.focus();
            return false;
        }
        
        if (document.electUs.ephonenumber.value == "")
        {
           document.electUs.ephonenumber.focus();
        }
        else if (isNaN(document.electUs.ephonenumber.value) ||
                document.electUs.ephonenumber.value.length != 8)
        {
            alert("Please provide a valid phone number in a format 81234567 or 91234567!");
            document.electUs.ephonenumber.focus();
            return false;
        }
        else
        {
            return true;
        }
        
        if (document.electUs.eemail.value == "")
        {
            alert("Please provide your email!");
            document.electUs.eemail.focus();
            return false;
        }
        
         var email = document.electUs.eemail.value;
         atpos = email.indexOf("@");
         dotpos = email.lastIndexOf(".");
         
         if (atpos < 1 || ( dotpos - atpos < 2 )) 
         {
            alert("Please enter correct email ID")
            document.electUs.email.focus() ;
            return false;
         }
         
         var vperson = document.electUs.eperson;
         var len = vperson.length;
         var voted = null;

        for (i = 0; i <len; i++) {
            if (vperson[i].checked) 
            {
               voted = vperson[i].value;
            }
        }

        if (voted == null) {
            alert("Please select the candidate you want to elect!");
            return false;
        }
        
         var vpost = document.electUs.epost;
         var len2 = vpost.length;
         var voted2 = null;

        for (i = 0; i <len2; i++) {
            if (vpost[i].checked) 
            {
               voted2 = vpost[i].value;
            }
        }

        if (voted2 == null) {
            alert("Please select the post you wish your candidate to hold!");
            return false;
        }
         
         alert("Thank you for voting!\n\
                We will inform you of the result via the formal announcement on 31st Decemebr 2017 12PM!");
         return true;
    }
     
function validateLoginForm()
{
    if (document.loginMe.uname.value != "user123")
        {
            alert("Incorrect username! Try again!");
            document.loginMe.uname.focus();
            return false;
        }
        
     if (document.loginMe.pword.value != "p@ss")
        {
            alert("Login failed!");
            document.loginMe.pword.focus();
            return false;
        }
    alert("Login successful!");
    return true;
}

 function validateRegistrationForm()
    {
        if (document.registerMe.rname.value == "")
        {
            alert("Please provide your name!");
            document.registerMe.rname.focus();
            return false;
        }
        
         var rreligion = document.registerMe.religion;
         var rlen = rreligion.length;
         var check = null;

        for (i = 0; i <rlen; i++) {
            if (rreligion[i].checked) 
            {
               check = rreligion[i].value;
            }
        }

        if (document.registerMe.religion.value == "")
        {
            (check == null) 
            {
                alert("Please select your religion! We can know your type of food :)");
                return false;
            }
        }
        
         if (document.registerMe.rcourse.value == "-1")
        {
            alert("Please provide your course!");
            document.registerMe.rcourse.focus();
            return false;
        }
              
        if (isNaN(document.registerMe.rphonenumber.value) ||
                document.registerMe.rphonenumber.value.length != 8)
        {
            alert("Please provide a valid phone number in a format 81234567 or 91234567!");
            document.registerMe.rphonenumber.focus();
            return false;
        }
        
         var emailr = document.registerMe.remail.value;
         atpos = emailr.indexOf("@");
         dotpos = emailr.lastIndexOf(".");
         
         if (atpos < 1 || ( dotpos - atpos < 2 )) 
         {
            alert("Please enter correct email ID")
            document.registerMe.remail.focus() ;
            return false;
         }
         
        if (isNaN(document.registerMe.rephonenumber.value) ||
                document.registerMe.rephonenumber.value.length != 8)
        {
            alert("Please provide a valid phone number in a format 81234567 or 91234567!");
            document.registerMe.rephonenumber.focus();
            return false;
        }
         
         alert("Thank you for signing up!\n\
               We will hear from us soon via your contact number!");
         return true;
    }
