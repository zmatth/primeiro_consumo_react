import React from 'react';
import './footer.css';

export default props => (
    <div class="mt-5 pt-5 pb-5 footer">
<div class="container">
  <div class="row">
    <div class="col-lg-5 col-xs-12 about-company">
      <h2>Heading</h2>
      <p class="pr-5 text-white-50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac ante mollis quam tristique convallis </p>
      <p><a href="#"><i class="fa fa-facebook-square mr-1"></i></a><a href="#"><i class="fa fa-linkedin-square"></i></a></p>
    </div>
    <div class="col-lg-3 col-xs-12 links">
      <h4 class="mt-lg-0 mt-sm-3">Links</h4>
        <ul class="m-0 p-0">
          <li>- <a href="#">Todas as categorias</a></li>
          <li>- <a href="#">Champagnes</a></li>
          <li>- <a href="#">Vinhos</a></li>
          <li>- <a href="#">Destilados</a></li>
          <li>- <a href="#">Fale Conosco</a></li>
          <li>- <a href="#">Trabalhe Conosco</a></li>
        </ul>
    </div>
    <div class="col-lg-4 col-xs-12 location">
      <h4 class="mt-lg-0 mt-sm-4">Location</h4>
      <p>22, Osasco</p>
      <p class="mb-0"><i class="fa fa-phone mr-3"></i>(11) 7070-7070</p>
      <p><i class="fa fa-envelope-o mr-3"></i>AboutUs@info.com</p>
    </div>
  </div>
  <div class="row mt-5">
    <div class="col copyright">
      <p class=""><small class="text-white-50">© 2020. All Rights Reserved.</small></p>
    </div>
  </div>
</div>
</div>
)