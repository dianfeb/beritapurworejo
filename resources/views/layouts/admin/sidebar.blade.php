
<ul class="menu">
    <li class='sidebar-title'>Main Menu</li>
    <li class="sidebar-item active ">
        <a href="/dashboard" class='sidebar-link'>
            <i data-feather="home" width="20"></i> 
            <span>Dashboard</span>
        </a>    
    </li>
    @if (auth()->user()->role == 1)
    <li class="sidebar-item ">
        <a href="{{ url('categories') }}" class='sidebar-link'>
            <i data-feather="file-plus" width="20"></i> 
            <span>Categories</span>
        </a>    
    </li>

    <li class="sidebar-item ">
        <a href="{{ url('sosmed') }}" class='sidebar-link'>
            <i data-feather="instagram" width="20"></i> 
            <span>Sosial Media</span>
        </a>    
    </li>

    <li class="sidebar-item ">
        <a href="{{ url('config') }}" class='sidebar-link'>
            <i data-feather="heart" width="20"></i> 
            <span>Modul Config</span>
        </a>    
    </li>
    @endif
    <li class="sidebar-item ">
        <a href="{{ url('articles') }}" class='sidebar-link'>
            <i data-feather="file-text" width="20"></i> 
            <span>Articles</span>
        </a>    
    </li>

        
    <li class='sidebar-title'>Pages</li>
                
            
                
    <li class="sidebar-item ">
        <a href="{{ url('users') }}" class='sidebar-link'>
            <i data-feather="user" width="20"></i> 
            <span>User</span>
        </a>    
    </li>

    <li class="sidebar-item  has-sub">
        <a href="#" class='sidebar-link'>
            <i data-feather="triangle" width="20"></i> 
            <span>Components</span>
        </a>       
        <ul class="submenu ">           
            <li>
                <a href="component-alert.html">Alert</a>
            </li>           
        </ul>       
    </li>
    
</ul>


 
    
