function clearSubscribeText(txtBox){	
		var searchtext =  txtBox.value;
		if(searchtext=="Enter your email here"){
			txtBox.value="";
		}
}

function doSubscribe(subsTxtId)
{
	var email_id = document.getElementById(subsTxtId).value;	
	if(isValidEmailId(email_id))
	{
		$.post(
			'http://www.scubeproductions.com/scripts/emailsubscribe.php', 
			{
				'action' : 'doSubscribe', 
				'email_id' : email_id
			},
			function(data){
				document.getElementById('email_subscribe').innerHTML = data;
			}
		);
		alert('Thanks for subscribing for our updates');
	}
	else
	{
		alert('Enter valid email id');
	}
}

function isValidEmailId(email)
{
    if(email.length <= 0)
	{
	  return false;
	}
    var splitted = email.match("^(.+)@(.+)$");
    if(splitted == null) return false;
    if(splitted[1] != null )
    {
      var regexp_user=/^\"?[\w-_\.]*\"?$/;
      if(splitted[1].match(regexp_user) == null) return false;
    }
    if(splitted[2] != null)
    {
      var regexp_domain=/^[\w-\.]*\.[A-Za-z]{2,4}$/;
      if(splitted[2].match(regexp_domain) == null) 
      {
	    var regexp_ip =/^\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\]$/;
	    if(splitted[2].match(regexp_ip) == null) return false;
      }// if
      return true;
    }
	return false;
}