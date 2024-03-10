<header class="header-area">
      
    <div class="header-navbar-middle d-none d-lg-block">
       <div class="container">
          <div class="navbar-brand-wrapper py-3 d-flex justify-content-center align-items-center">
             <a class='navbar-brand' href='/'>
                <img class="lazyload" src="https://d33wubrfki0l68.cloudfront.net/da047f13938ef3073df84084c42973f94b813008/e2cd2/assets/images/header-brand.png" alt="image">
             </a>
          </div>
       </div>
    </div>
    <div class="header-navbar-bottom pt-2 pt-lg-0 border-top border-light">
       <div class="container themeix-menu-selector">
          <nav class="navbar navbar-expand-lg">
             <div class="collapse navbar-collapse" id="main_nav">
                <ul class="navbar-nav me-auto">
          
                   <li class="nav-item"><a class='nav-link' href='/'>Home </a></li>
                   @foreach ($categories as $item)
                   <li class="nav-item"><a class='nav-link' href='{{ url('category/'. $item->slug) }}'>{{ $item->name }} </a></li>
                   @endforeach
                   

                </ul>
             </div>
             <div class="search-modal" data-bs-toggle="modal" data-bs-target="#search-modal"><a class="nav-link"
                   href="#"> <i class="fas fa-search"></i> </a>
             </div>
          </nav>
          <div class="modal fade" id="search-modal" data-bs-backdrop="static">
             <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
             <div class="modal-dialog">
                <div class="modal-content">
                   <div class="modal-body">
                     <form action="{{ route('search') }}" method="POST">
                         <div class="input-group">
                            <span class="input-group-text"><i class="fa fa-search"></i></span>
                            <input type="text" class="form-control" name="keyword" placeholder="Search Here">
                         </div>
                      </form>
                   </div>
                </div>
             </div>
          </div>
       </div>
    </div>
 </header>