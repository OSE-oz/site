  //header animation
       document.addEventListener('DOMContentLoaded', function() {
            // Sample background images - replace with your actual image URLs
            const backgrounds = [
                "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/5181c7f5-4300-4d23-a0d1-d0cc2a40214b/dffpuj1-62718e45-2a55-4ceb-9dfd-23cb3bfc453a.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzUxODFjN2Y1LTQzMDAtNGQyMy1hMGQxLWQwY2MyYTQwMjE0YlwvZGZmcHVqMS02MjcxOGU0NS0yYTU1LTRjZWItOWRmZC0yM2NiM2JmYzQ1M2EuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.a0y2ECKSKeETyTF3WllPfsQ0zbSHks58ny3klCEUd_Q",
                "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/462064fa-8a78-4289-82e4-375cc0c67d47/dgb81ah-9cf97ac2-fec8-4487-a6e7-97d20f491f7b.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQ2MjA2NGZhLThhNzgtNDI4OS04MmU0LTM3NWNjMGM2N2Q0N1wvZGdiODFhaC05Y2Y5N2FjMi1mZWM4LTQ0ODctYTZlNy05N2QyMGY0OTFmN2IuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.SttKqcEo9cMtauB0VlWtubojQaCIh-L7WnkztF5lbs4",
                "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b5eb4906-cec2-4ce0-b2cc-edc2468e7177/di1zdyh-9ab3c7db-9e9a-4ee6-ba2c-575b166fd13f.png/v1/fill/w_1264,h_632,q_70,strp/am_i_going_home__by_kaawiss_di1zdyh-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvYjVlYjQ5MDYtY2VjMi00Y2UwLWIyY2MtZWRjMjQ2OGU3MTc3XC9kaTF6ZHloLTlhYjNjN2RiLTllOWEtNGVlNi1iYTJjLTU3NWIxNjZmZDEzZi5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.dqhrXLg0_uFAh3LEgRBsuDMx6uUYBBzrEXtJQEeG-Q0",
                //"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b8ce94d3-08d5-4755-b207-fd62ad973e88/dehxsyl-a83a862c-bc1b-46de-a4f5-663fe4c940da.jpg/v1/fill/w_1264,h_632,q_70,strp/summon_by_chinnkun_dehxsyl-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjQwIiwicGF0aCI6IlwvZlwvYjhjZTk0ZDMtMDhkNS00NzU1LWIyMDctZmQ2MmFkOTczZTg4XC9kZWh4c3lsLWE4M2E4NjJjLWJjMWItNDZkZS1hNGY1LTY2M2ZlNGM5NDBkYS5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.fcptGsX8vuSVFOHxwDPaOLZjazQVu8J8i4gZvzyOnhY",
                //"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9a8b3db4-2ad4-43e5-bccd-3e0260872824/dih1l4j-97185b2f-2b17-4861-a62c-7b8eecd4db96.png/v1/fill/w_1191,h_671,q_70,strp/_halloween_by_milkshake33_dih1l4j-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIxIiwicGF0aCI6IlwvZlwvOWE4YjNkYjQtMmFkNC00M2U1LWJjY2QtM2UwMjYwODcyODI0XC9kaWgxbDRqLTk3MTg1YjJmLTJiMTctNDg2MS1hNjJjLTdiOGVlY2Q0ZGI5Ni5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.eokvyCZmXxdF9TKNA-EO4K89H5sja0eaYZdv_pvbpbw",
            ];

            const sliders = document.querySelectorAll('.bg-slider');
            let current = 0;

            // Set initial backgrounds
            sliders.forEach((slider, index) => {
                slider.style.backgroundImage = `url(${backgrounds[index]})`;
            });

            // Activate first slide
            sliders[0].classList.add('active');

            // Rotate backgrounds every 5 seconds
            setInterval(() => {
                // Get current and next slide
                const currentSlide = sliders[current];
                const nextSlide = sliders[(current + 1) % sliders.length];
                
                // Deactivate current slide
                currentSlide.classList.remove('active');
                
                // Activate next slide
                nextSlide.classList.add('active');
                
                // Update current index
                current = (current + 1) % sliders.length;
                
                // Preload next image after this one
                const nextIndex = (current + 1) % sliders.length;
                const sliderToUpdate = sliders[nextIndex];
                sliderToUpdate.style.backgroundImage = `url(${backgrounds[nextIndex]})`;
                
            }, 4000);
        });
// img-body
/*    document.addEventListener('DOMContentLoaded', function() {
            // Get all wallpaper items
            const wallpaperItems = document.querySelectorAll('.wallpaper-item');
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('expandedImg');
            const closeBtn = document.querySelector('.close');  
            // Add click event to each wallpaper item
            wallpaperItems.forEach(item => {
                item.addEventListener('click', function() {
                    const imgSrc = this.querySelector('img').src;
                    const imgAlt = this.querySelector('img').alt;
                    
                    modal.style.display = 'block';
                    modalImg.src = imgSrc;
                    modalImg.alt = imgAlt;
                });
            });
            // Close modal when clicking X
            closeBtn.addEventListener('click', function() {
                modal.style.display = 'none';
            });
            // Close modal when clicking outside image
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.style.display = 'none';
                }
            });
            
            // Close modal with ESC key
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') {
                    modal.style.display = 'none';
                }
            });
        });
*/
    //box
        document.addEventListener('DOMContentLoaded', function() {
            const images = document.querySelectorAll('.box-image');
            const dots = document.querySelectorAll('.dot');
            let currentIndex = 0;
            let interval;
            // Function to change image
            function changeImage(index) {
                // Remove active class from all images and dots
                images.forEach(img => img.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                // Add active class to selected image and dot
                images[index].classList.add('active');
                dots[index].classList.add('active');
                currentIndex = index;
            }
            // Auto slide function
            function autoSlide() {
                let nextIndex = (currentIndex + 1) % images.length;
                changeImage(nextIndex);
            }
            // Start auto slide
            function startSlide() {
                interval = setInterval(autoSlide, 5000);
            }
            // Initialize
            startSlide();
            // Add click event to dots
            dots.forEach(dot => {
                dot.addEventListener('click', function() {
                    clearInterval(interval);
                    const index = parseInt(this.getAttribute('data-index'));
                    changeImage(index);
                    startSlide();
                });
            });
            // Pause on hover
            const headerContainer = document.querySelector('.box-container');
            headerContainer.addEventListener('mouseenter', function() {
                clearInterval(interval);
            });
            headerContainer.addEventListener('mouseleave', function() {
                startSlide();
            });
        });