$(document).ready(function()
  {
    var generate_php_element_array = function()
    {
      var str = 'array(';

    
      $('input, textarea, select').each(function(){
        var frm_el = $(this);
        var el_name = frm_el.attr('name');
        
        if(el_name !== undefined)
        {
          var type = (el_name.indexOf('[') > 0) ? 'array()' : '\'\''; 
          if(type == 'array()')
          {
            el_name = el_name.replace('[', '').replace(']', '');
            
          }
          
          if(str.indexOf(el_name) == -1)
          {
            str += '\'' + el_name + '\' => ' + type +',\n';
          }
          
        }
        

      });

      str += ');';
      
      return str;
    }

    var generate_php_echo_statements = function()
    {
      var str = '';

      
      return str;
    }

    $('<pre>' + generate_php_element_array() + '</pre>').appendTo($('body'));
  });
