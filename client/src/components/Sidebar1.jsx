

function SideBar1(){
    return(
        <>
            <aside class="sidebar1">
            <div class="welcome-card">
                <h2>Welcome back, Abebe!</h2>
                <p>You have 3 active applications and 2 pending actions.</p>
                <button class="explore-btn">View All Applications</button>
            </div>

            <div class="dashboard-menu">
                <a href="#" class="menu-item active">
                    <i class="fas fa-home"></i>
                    <span>Dashboard</span>
                </a>
                <a href="#" class="menu-item">
                    <i class="fas fa-file-alt"></i>
                    <span>My Applications</span>
                </a>
                <a href="#" class="menu-item">
                    <i class="fas fa-document"></i>
                    <span>Documents</span>
                </a>
                <a href="#" class="menu-item">
                    <i class="fas fa-credit-card"></i>
                    <span>Payments</span>
                </a>
                <a href="#" class="menu-item">
                    <i class="fas fa-user-circle"></i>
                    <span>Profile Settings</span>
                </a>
                <a href="#" class="menu-item">
                    <i class="fas fa-question-circle"></i>
                    <span>Help Center</span>
                </a>
                <a href="#" class="menu-item">
                    <i class="fas fa-sign-out-alt"></i>
                    <span>Logout</span>
                </a>
            </div>
        </aside>
        </>
    )
}