fetch('https://training20220213a.herokuapp.com/huzifa')
  .then(response => response.json())
  .then(json => {
      var RH = document.getElementById('RH');
      var OriginalContent = `<div>
            <div class="icon"><i class="MANGALA"></i></div>
            <h4 class="title"><a href="">FADY</a></h4>
            <p class="description">CHRIST</p>
          </div>`;
      for(var i=0;i<json.length;i++)
      {
          var MyContent = document.createElement('div');
          var CustomisedContent = OriginalContent;
          CustomisedContent = CustomisedContent.replace('FADY',json[i].id);
          CustomisedContent = CustomisedContent.replace('CHRIST',json[i].name);
          CustomisedContent = CustomisedContent.replace('MANGALA',"bi bi-facebook");
          MyContent.className='col-lg-4 col-md-6 icon-box'
          MyContent.innerHTML = CustomisedContent;
          RH.appendChild(MyContent);
      }
  })