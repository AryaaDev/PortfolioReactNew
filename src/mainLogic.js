export default function runVanillaJS() {
    // ==========================================
    // 1. FUNGSI OBSERVERS (Animasi Scroll)
    // ==========================================
    function observeOnce(selector, className, threshold = 0.2) {
        const el = document.querySelector(selector);
        if (!el) return;
        const obs = new IntersectionObserver(entries => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    el.classList.add(className);
                    obs.unobserve(el);
                }
            });
        }, { threshold });
        obs.observe(el);
    }

    function observeMultipleOnce(selector, classes, threshold = 0.2) {
        const elements = document.querySelectorAll(selector);
        if (!elements.length) return;
        const obs = new IntersectionObserver((entries, observer) => {
            entries.forEach(e => {
                if (e.isIntersecting) {
                    classes.forEach(c => e.target.classList.add(c));
                    observer.unobserve(e.target);
                }
            });
        }, { threshold });
        elements.forEach(el => obs.observe(el));
    }

    observeOnce(".about", "animate", 0.25);
    observeMultipleOnce(".skills-title h2, .skills-title span, .skill", ["visible", "animate"], 0.25);
    observeMultipleOnce(".contact, .contact-text, .contact-info, .contact-list li, .contact-form", ["visible"], 0.35);
    observeMultipleOnce(".contact-text p, .contact-list li, .contact-form input, .contact-form textarea, .contact-form .send", ["show"], 0.25);
    observeMultipleOnce(".certificate-item", ["animate"], 0.25);
    observeOnce(".certificates-title h2", "animate", 0.5);

    const softSection = document.querySelector("#SoftSkills");
    const softItems = document.querySelectorAll(".btn-box1");
    if (softSection && softItems.length) {
        const softObserver = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    softItems.forEach((item, i) => {
                        setTimeout(() => { item.classList.add("visible", "animate"); }, i * 120);
                    });
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        softObserver.observe(softSection);
    }

    const footerText = document.querySelector(".footer-text");
    if (footerText) {
        const footerObserver = new IntersectionObserver(([entry], obs) => {
            if (entry.isIntersecting) {
                footerText.classList.add("show-text");
                obs.unobserve(entry.target);
            }
        }, { threshold: 0.4 });
        footerObserver.observe(footerText);
    }

    // ==========================================
    // 2. MESIN 3D CAROUSEL, FILTER, NAVIGASI DOTS & INTERAKSI
    // (VERSI PRO - 100% SMOOTH, NATIVE FEEL, ANTI-LAG)
    // ==========================================
    const filterButtons = document.querySelectorAll(".filter-btn");
    const portfolioItems = Array.from(document.querySelectorAll(".portfolio-item"));
    const portfolioWrapper = document.querySelector(".portfolio-3d-wrapper");
    
    let activeIndex = 0;
    let filteredItems = portfolioItems;

    // --- 1. FUNGSI UTAMA UPDATE 3D (TANPA DISPLAY: NONE) ---
    function update3DCarousel() {
        if (!filteredItems || filteredItems.length === 0) return;

        // Reset semua class state, biarkan CSS base (.portfolio-item) yang menyembunyikan
        portfolioItems.forEach(item => {
            item.classList.remove("active", "prev", "next");
        });

        // Set state hanya untuk item yang masuk dalam filter saat ini
        filteredItems.forEach((item, index) => {
            const len = filteredItems.length;

            if (index === activeIndex) {
                item.classList.add("active");
            } 
            // Modulo math untuk looping tanpa batas
            else if (index === (activeIndex - 1 + len) % len) {
                item.classList.add("prev");
            } 
            // Jika item hanya 2, pastikan tidak tertimpa class next
            else if (index === (activeIndex + 1) % len && len > 2) {
                item.classList.add("next");
            } 
            else if (len === 2 && index === (activeIndex + 1) % len) {
                item.classList.add("next"); // Fallback jika item cuma 2
            }
        });

        // Update Counter Angka
        const currentCounter = document.querySelector('.carousel-counter .current');
        const totalCounter = document.querySelector('.carousel-counter .total');
        
        if (currentCounter && totalCounter) {
            currentCounter.innerText = (activeIndex + 1).toString().padStart(2, '0');
            totalCounter.innerText = filteredItems.length.toString().padStart(2, '0');
        }

        // Update Dots
        const dots = document.querySelectorAll('.carousel-dots .dot');
        dots.forEach((dot, index) => {
            if (index >= filteredItems.length) {
                dot.style.display = "none";
            } else {
                dot.style.display = "block";
                if (index === activeIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            }
        });
    }

    // --- 2. FUNGSI NAVIGASI GLOBAL ---
    window.nextProject = function() {
        if(filteredItems.length === 0) return;
        activeIndex = (activeIndex + 1) % filteredItems.length;
        update3DCarousel();
    };

    window.prevProject = function() {
        if(filteredItems.length === 0) return;
        activeIndex = (activeIndex - 1 + filteredItems.length) % filteredItems.length;
        update3DCarousel();
    };

    window.goToProject = function(index) {
        if (!filteredItems || filteredItems.length === 0) return;
        let targetIndex = index - 1;
        if (targetIndex >= filteredItems.length) return;
        activeIndex = targetIndex;
        update3DCarousel();
    };

    // --- 3. LOGIKA FILTER BUTTONS ---
    if (filterButtons.length && portfolioItems.length) {
        filterButtons.forEach(btn => {
            if (!btn.dataset.listenerAttached) {
                btn.addEventListener("click", () => {
                    filterButtons.forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");
                    
                    const filter = btn.dataset.filter;
                    if (filter === "all") {
                        filteredItems = portfolioItems;
                    } else {
                        filteredItems = portfolioItems.filter(item => item.dataset.category === filter);
                    }
                    
                    activeIndex = 0; // Reset ke kartu pertama setiap ganti filter
                    requestAnimationFrame(() => update3DCarousel());
                });
                btn.dataset.listenerAttached = "true";
            }
        });
    }

    // --- 4. KLIK KARTU SAMPING LANGSUNG KE TENGAH ---
    portfolioItems.forEach((item) => {
        if (!item.dataset.clickAttached) {
            item.addEventListener("click", (e) => {
                if (!item.classList.contains("active")) {
                    e.preventDefault(); 
                    e.stopPropagation();
                    const targetIndex = filteredItems.indexOf(item);
                    if (targetIndex !== -1) {
                        activeIndex = targetIndex;
                        update3DCarousel();
                    }
                }
            });
            item.dataset.clickAttached = "true";
        }
    });

    // --- 5. DRAG MOUSE & SWIPE TOUCH (REAL-TIME NATIVE FEEL) ---
    if (portfolioWrapper && !portfolioWrapper.dataset.swipeAttached) {
        let isDragging = false;
        let startPos = 0;
        const dragThreshold = 50; 

        portfolioWrapper.addEventListener("pointerdown", (e) => {
            // [FIX PENTING] Abaikan drag jika user menekan tombol slider dalam gambar atau link!
            // Ini mencegah kartu luar ikut terseret saat tombol dalam diklik.
            if (e.target.closest("button") || e.target.closest(".slider-btn") || e.target.closest("a")) {
                return; 
            }
            
            isDragging = true;
            startPos = e.clientX;
            portfolioWrapper.style.cursor = "grabbing";
        });

        portfolioWrapper.addEventListener("pointermove", (e) => {
            if (!isDragging) return;

            const currentPosition = e.clientX;
            const diff = currentPosition - startPos;

            // Cegah scroll browser saat user menggeser kartu
            if (Math.abs(diff) > 10) {
                e.preventDefault();
            }

            const activeCard = document.querySelector(".portfolio-item.active");
            if (activeCard) {
                activeCard.style.transition = "none"; 
                const moveX = Math.max(-150, Math.min(150, diff));
                const rotateY = moveX * 0.1; 
                activeCard.style.transform = `scale(1) translateX(${moveX}px) translateZ(0) rotateY(${rotateY}deg)`;
            }
        });

        const stopDrag = (e) => {
            if (!isDragging) return;
            isDragging = false;
            portfolioWrapper.style.cursor = "default";
            
            const currentPosition = e.clientX;
            const diff = currentPosition - startPos;
            const activeCard = document.querySelector(".portfolio-item.active");

            if (activeCard) {
                activeCard.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"; 
                activeCard.style.transform = "";  
                
                setTimeout(() => {
                    if (activeCard) activeCard.style.transition = "";
                }, 500); 
            }

            // Eksekusi Pindah Kartu
            if (diff < -dragThreshold) {
                window.nextProject(); 
            } else if (diff > dragThreshold) {
                window.prevProject(); 
            }
        };

        portfolioWrapper.addEventListener("pointerup", stopDrag);
        portfolioWrapper.addEventListener("pointerleave", stopDrag);
        portfolioWrapper.addEventListener("pointercancel", stopDrag);
        portfolioWrapper.dataset.swipeAttached = "true";
    }

    // --- 6. NAVIGASI KEYBOARD (KIRI & KANAN) ---
    if (!window._portfolioKeyboardBound) {
        document.addEventListener("keydown", (e) => {
            const portfolioSection = document.querySelector(".portfolio");
            if (!portfolioSection) return;

            // [FIX PENTING] Cek apakah Lightbox/Modal gambar sedang terbuka di layar
            const isModalOpen = document.querySelector("#imageModal.show, #certificateModal.show");
            
            // Jika modal terbuka, blokir fungsi keyboard untuk 3D Carousel di belakangnya!
            if (isModalOpen) {
                return; 
            }

            // Pastikan user sedang melihat section portfolio
            const rect = portfolioSection.getBoundingClientRect();
            const isInView = rect.top < window.innerHeight && rect.bottom > 0;

            if (isInView) {
                if (e.key === "ArrowLeft") {
                    window.prevProject();
                } else if (e.key === "ArrowRight") {
                    window.nextProject();
                }
            }
        });
        window._portfolioKeyboardBound = true;
    }

    // Inisialisasi awal saat DOM dimuat
    setTimeout(() => { update3DCarousel(); }, 100);

    // ==========================================
    // 3. SLIDER GAMBAR DALAM & LIGHTBOX
    // ==========================================
    window.slidePortfolio = function (id, direction) {
        // [FIX ANTI-LONCAT & ANTI-BOCOR]
        // Mengambil event klik yang sedang terjadi otomatis (tanpa perlu ubah JSX)
        if (window.event) {
            window.event.preventDefault(); // Mencegah layar loncat naik/turun
            window.event.stopPropagation(); // Mencegah kartu 3D ikut bergeser
        }

        const slider = document.getElementById(`portfolio-slider-${id}`);
        if (!slider) return;
        const images = slider.querySelectorAll(".slider-img");
        if (!images.length) return;
        let current = [...images].findIndex(img => img.classList.contains("active"));
        if (current < 0) current = 0;
        images[current].classList.remove("active");
        const next = (current + direction + images.length) % images.length;
        images[next].classList.add("active");
    };

    // (Lakukan hal yang sama untuk slider certificate)
    window.slideCertificate = function (id, dir) {
        if (window.event) {
            window.event.preventDefault();
            window.event.stopPropagation();
        }

        const slider = document.getElementById(`certificate-slider-${id}`);
        if (!slider) return;
        const imgs = slider.querySelectorAll(".slider-img");
        if (!imgs.length) return;
        let current = [...imgs].findIndex(img => img.classList.contains("active"));
        if (current < 0) current = 0;
        imgs[current].classList.remove("active");
        const next = (current + dir + imgs.length) % imgs.length;
        imgs[next].classList.add("active");
    };

    function initPortfolioSliderImages() {
        document.querySelectorAll(".portfolio-slider, .certificate-slider").forEach(slider => {
            const imgs = slider.querySelectorAll(".slider-img");
            if (!imgs.length) return;
            imgs.forEach((img, i) => img.classList.toggle("active", i === 0));
        });
    }
    initPortfolioSliderImages();

    // ==========================================
    // 4. LIGHTBOX & MODAL
    // ==========================================
    function initLightbox({ container, modalId, imgId, captionId }) {
        const scope = document.querySelector(container);
        const modal = document.getElementById(modalId);
        const header = document.querySelector(".header"); 

        if (!scope || !modal) return;
        const img = modal.querySelector(`#${imgId}`);
        const caption = modal.querySelector(`#${captionId}`);
        const closeBtn = modal.querySelector(".close-lightbox");

        scope.querySelectorAll(".slider-img").forEach(el => {
            if (!el.dataset.lightboxAttached) {
                el.addEventListener("click", () => {
                    modal.classList.add("show");
                    modal.setAttribute("aria-hidden", "false");
                    img.src = el.src;
                    caption.textContent = el.alt || "";
                    document.body.style.overflow = "hidden";
                    if (header) header.style.display = "none";
                });
                el.dataset.lightboxAttached = "true";
            }
        });

        const close = () => {
            modal.classList.remove("show");
            modal.setAttribute("aria-hidden", "true");
            document.body.style.overflow = "";
            if (header) header.style.display = ""; 
        };

        if (!closeBtn?.dataset.closeAttached) {
            closeBtn?.addEventListener("click", close);
            if (closeBtn) closeBtn.dataset.closeAttached = "true";
        }
        
        // REVISI: Pengamanan Ganda untuk Keyboard Escape
        if (!window._lightboxEscapeBound) {
            document.addEventListener("keydown", e => {
                if (e.key === "Escape" && modal.classList.contains("show")) close();
            });
            window._lightboxEscapeBound = true;
        }
    }

    initLightbox({ container: ".certificates", modalId: "certificateModal", imgId: "certificateImg", captionId: "certificateCaption" });

    (function initPortfolioLightboxSlider() {
        const modal = document.getElementById("imageModal");
        if (!modal) return;

        const img = modal.querySelector("#lightboxImg");
        const caption = modal.querySelector("#lightboxCaption");
        const closeBtn = modal.querySelector(".close-lightbox");
        const header = document.querySelector(".header");

        let images = [];
        let index = 0;

        if (!modal.querySelector(".lb-prev")) {
            const prev = document.createElement("button");
            const next = document.createElement("button");
            prev.className = "lb-nav lb-prev";
            next.className = "lb-nav lb-next";
            prev.innerHTML = "&#10094;";
            next.innerHTML = "&#10095;";
            modal.append(prev, next);

            const show = i => {
                if (i < 0 || i >= images.length) return;
                index = i;
                img.style.opacity = "0";

                requestAnimationFrame(() => {
                    img.src = images[index].src;
                    caption.textContent = images[index].alt || "";
                    img.onload = () => img.style.opacity = "1";
                });

                prev.classList.toggle("hidden", index === 0);
                next.classList.toggle("hidden", index === images.length - 1);
            };

            document.querySelectorAll(".portfolio .slider-img").forEach(el => {
                if (!el.dataset.sliderAttached) {
                    el.addEventListener("click", e => {
                        const box = el.closest(".portfolio-item");
                        if (!box || !box.classList.contains("active")) return;
                        images = [...box.querySelectorAll(".slider-img")];
                        index = images.indexOf(el);
                        
                        modal.classList.add("show");
                        modal.setAttribute("aria-hidden", "false");
                        document.body.style.overflow = "hidden";
                        if (header) header.style.display = "none";
                        show(index);
                    });
                    el.dataset.sliderAttached = "true";
                }
            });

            prev.onclick = e => { e.stopPropagation(); show(index - 1); };
            next.onclick = e => { e.stopPropagation(); show(index + 1); };

            const close = () => {
                modal.classList.remove("show");
                modal.setAttribute("aria-hidden", "true");
                document.body.style.overflow = "";
                if (header) header.style.display = "";
            };

            if (!closeBtn?.dataset.sliderCloseAttached) {
                closeBtn?.addEventListener("click", close);
                if (closeBtn) closeBtn.dataset.sliderCloseAttached = "true";
            }

            // REVISI: Pengamanan memory leak keyboard
            if (!window._portfolioLightboxKeyBound) {
                document.addEventListener("keydown", e => {
                    if (!modal.classList.contains("show")) return;
                    if (e.key === "Escape") close();
                    if (e.key === "ArrowLeft") show(index - 1);
                    if (e.key === "ArrowRight") show(index + 1);
                });
                window._portfolioLightboxKeyBound = true;
            }
        }
    })();
    
    // ==========================================
    // 5. ZOOM IMAGE
    // ==========================================
    function enableSimpleZoom(modalId, imgId) {
        const modal = document.getElementById(modalId);
        const img = modal?.querySelector(`#${imgId}`);
        if (!modal || !img) return;

        let scale = 1, lastScale = 1, startDistance = null;
        let translateX = 0, translateY = 0, lastTranslateX = 0, lastTranslateY = 0;
        let isDragging = false, startX = 0, startY = 0, lastTap = 0, originX = 0, originY = 0;

        img.style.transformOrigin = "center center";
        img.style.transition = "transform 0.2s ease-out";
        img.style.touchAction = "none";

        const getDistance = touches => Math.hypot(touches[0].clientX - touches[1].clientX, touches[0].clientY - touches[1].clientY);
        const getMidpoint = touches => ({ x: (touches[0].clientX + touches[1].clientX) / 2, y: (touches[0].clientY + touches[1].clientY) / 2 });
        const applyTransform = () => { img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`; };

        if (!modal.dataset.zoomAttached) {
            modal.addEventListener("touchstart", e => {
                if (e.touches.length > 2) return;
                const now = Date.now();
                if (now - lastTap < 400) {
                    scale = 1; lastScale = 1; translateX = translateY = lastTranslateX = lastTranslateY = 0;
                    img.style.transformOrigin = "center center"; applyTransform();
                }
                lastTap = now;
                if (e.touches.length === 2) {
                    startDistance = getDistance(e.touches);
                    const mid = getMidpoint(e.touches);
                    const rect = img.getBoundingClientRect();
                    originX = mid.x - rect.left; originY = mid.y - rect.top;
                    img.style.transformOrigin = `${originX}px ${originY}px`;
                } else if (e.touches.length === 1 && scale > 1) {
                    isDragging = true; startX = e.touches[0].clientX - lastTranslateX; startY = e.touches[0].clientY - lastTranslateY;
                }
            }, { passive: false });

            modal.addEventListener("touchmove", e => {
                if (e.touches.length > 2) return;
                if (e.touches.length === 2 && startDistance) {
                    const currentDistance = getDistance(e.touches);
                    scale = lastScale * (currentDistance / startDistance);
                    scale = Math.max(1, Math.min(3, scale));
                    applyTransform(); e.preventDefault();
                } else if (e.touches.length === 1 && isDragging) {
                    translateX = e.touches[0].clientX - startX; translateY = e.touches[0].clientY - startY;
                    const maxX = (img.offsetWidth * (scale - 1)) / 2; const maxY = (img.offsetHeight * (scale - 1)) / 2;
                    translateX = Math.max(-maxX, Math.min(maxX, translateX)); translateY = Math.max(-maxY, Math.min(maxY, translateY));
                    applyTransform(); e.preventDefault();
                }
            }, { passive: false });

            modal.addEventListener("touchend", e => {
                lastScale = scale; lastTranslateX = translateX; lastTranslateY = translateY;
                if (e.touches.length < 2) startDistance = null;
                if (e.touches.length === 0) isDragging = false;
            });
            modal.dataset.zoomAttached = "true";
        }
    }

    enableSimpleZoom("imageModal", "lightboxImg");
    enableSimpleZoom("certificateModal", "certificateImg");

    // ==========================================
    // 6. SKILLS SLIDER & SWIPE
    // ==========================================
    function initSkillsSlider() {
        const viewport = document.querySelector(".skills-viewport");
        const track = document.querySelector(".skills-track");
        const pages = document.querySelectorAll(".skills-page");
        const left = document.querySelector(".skill-btn.left");
        const right = document.querySelector(".skill-btn.right");
        const indicators = document.querySelector(".skills-indicators");
        const skillsSection = document.querySelector(".skills");

        if (!viewport || !track || !pages.length || !left || !right || !indicators) return;
        if (viewport.dataset.sliderInitialized) return; 

        const duration = 800; const autoDelay = 3500;
        const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        let index = 0, anim = false, auto = null, resizeRAF = null, pointerDown = false, startX = 0, currentX = 0;

        track.style.willChange = "transform"; viewport.style.touchAction = "pan-y";
        track.style.transition = "none"; track.style.transform = "translateX(0px)";

        requestAnimationFrame(() => { if (!reduceMotion) { track.style.transition = `transform ${duration}ms cubic-bezier(0.16,1,0.3,1)`; } });

        const slideW = () => viewport.offsetWidth;
        const go = (i) => {
            if (anim || reduceMotion) return;
            anim = true;
            index = (i + pages.length) % pages.length;
            track.style.transform = `translateX(${-index * slideW()}px)`;
            [...indicators.children].forEach((dot, n) => dot.setAttribute("aria-selected", n === index));
            setTimeout(() => anim = false, duration);
        };

        indicators.innerHTML = "";
        pages.forEach((_, i) => {
            const dot = document.createElement("button"); dot.type = "button";
            dot.setAttribute("aria-label", `Go to slide ${i + 1}`); dot.setAttribute("aria-selected", i === 0);
            dot.addEventListener("click", () => { go(i); startAuto(); });
            indicators.appendChild(dot);
        });

        const startAuto = () => { if (reduceMotion) return; clearInterval(auto); auto = setInterval(() => go(index + 1), autoDelay); };
        const stopAuto = () => clearInterval(auto);

        left.onclick = () => { go(index - 1); startAuto(); };
        right.onclick = () => { go(index + 1); startAuto(); };

        if (skillsSection && !reduceMotion) {
            const observer = new IntersectionObserver(entries => {
                if (entries[0].isIntersecting) { startAuto(); observer.disconnect(); }
            }, { threshold: 0.3 }); observer.observe(skillsSection);
        }

        viewport.addEventListener("mouseenter", stopAuto); 
        viewport.addEventListener("mouseleave", startAuto);
        viewport.addEventListener("pointerdown", stopAuto);
        viewport.addEventListener("pointerdown", e => {
            if (anim) return;
            pointerDown = true; startX = e.clientX; currentX = startX;
            track.style.transition = "none"; viewport.setPointerCapture(e.pointerId);
        });
        viewport.addEventListener("pointermove", e => {
            if (!pointerDown) return;
            currentX = e.clientX; const delta = currentX - startX;
            track.style.transform = `translateX(${-index * slideW() + delta}px)`;
        });

        const endSwipe = () => {
            if (!pointerDown) return;
            pointerDown = false;
            const diff = currentX - startX; const threshold = slideW() * 0.15;
            track.style.transition = reduceMotion ? "none" : `transform ${duration}ms cubic-bezier(0.16,1,0.3,1)`;
            if (Math.abs(diff) > threshold) { diff < 0 ? go(index + 1) : go(index - 1); } else { go(index); }
            startAuto();
        };

        viewport.addEventListener("pointerup", endSwipe); 
        viewport.addEventListener("pointercancel", endSwipe); 
        viewport.addEventListener("pointerleave", endSwipe);
        
        // REVISI: Pengamanan Ganda untuk event window
        if (!window._skillsResizeBound) {
            window.addEventListener("resize", () => {
                cancelAnimationFrame(resizeRAF);
                resizeRAF = requestAnimationFrame(() => {
                    track.style.transition = "none"; track.style.transform = `translateX(${-index * slideW()}px)`;
                    requestAnimationFrame(() => { if (!reduceMotion) { track.style.transition = `transform ${duration}ms cubic-bezier(0.16,1,0.3,1)`; } });
                });
            });
            window.addEventListener("beforeunload", () => { clearInterval(auto); });
            window._skillsResizeBound = true;
        }
        
        viewport.dataset.sliderInitialized = "true";
    }
    initSkillsSlider();

    // ==========================================
    // 7. DUOTONE BUTTON & NAVBAR SCROLL
    // ==========================================
    (() => {
        const buttons = document.querySelectorAll(".btn-cv-duotone");
        if (!buttons.length) return;
        buttons.forEach(btn => {
            if (btn.dataset.duotoneAttached) return;
            const icon = btn.querySelector("i");
            if (!icon) return;
            let rafId = null;
            const animateIn = () => {
                cancelAnimationFrame(rafId);
                rafId = requestAnimationFrame(() => { btn.classList.remove("icon-reset"); btn.classList.add("icon-animate"); });
            };
            const animateOut = () => {
                cancelAnimationFrame(rafId);
                rafId = requestAnimationFrame(() => { btn.classList.remove("icon-animate"); btn.classList.add("icon-reset"); });
            };
            const enter = "onpointerenter" in window ? "pointerenter" : "mouseenter";
            const leave = "onpointerleave" in window ? "pointerleave" : "mouseleave";
            btn.addEventListener(enter, animateIn, { passive: true }); btn.addEventListener(leave, animateOut, { passive: true });
            btn.addEventListener("focus", animateIn, { passive: true }); btn.addEventListener("blur", animateOut, { passive: true });
            btn.addEventListener("click", () => {
                btn.classList.add("icon-press");
                requestAnimationFrame(() => { btn.classList.remove("icon-press"); });
            });
            btn.dataset.duotoneAttached = "true";
        });
    })();

    if (!document._contextMenuBound) {
        document.addEventListener("contextmenu", e => e.preventDefault());
        document._contextMenuBound = true;
    }

    if (!window._navbarScrollBound) {
        // Pindahkan pencarian elemen ke LUAR agar tidak dicari berkali-kali per detik
        const header = document.querySelector('.header');
        
        window.addEventListener('scroll', function() {
            if (header) {
                // requestAnimationFrame akan menyelaraskan event scroll dengan FPS layar (Sangat Smooth)
                window.requestAnimationFrame(() => {
                    if (window.scrollY > 20) {
                        header.classList.add('scrolled');
                    } else {
                        header.classList.remove('scrolled');
                    }
                });
            }
        }, { passive: true }); // passive: true penting agar scroll tidak memblokir render
        window._navbarScrollBound = true;
    }

    // ==========================================
    // 8. SCROLL SPY (INTERSECTION OBSERVER FIX)
    // ==========================================
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    function updateActiveMenu(currentId) {
        if (!currentId) return;

        // Pemetaan manual jika ID section berbeda dengan href (tetap dipertahankan)
        if (currentId === "SoftSkills") currentId = "skills";

        navLinks.forEach((link) => {
            link.classList.remove("active");
            // Cari link yang href-nya sesuai dengan ID section yang sedang tampil
            if (link.getAttribute("href") === `#${currentId}`) {
                link.classList.add("active");
            }
        });
    }

    // Bersihkan observer lama jika fungsi ini dipanggil ulang (Mencegah memory leak di React)
    if (window._scrollSpyObserver) {
        window._scrollSpyObserver.disconnect();
    }

    // KONFIGURASI BARU: Jauh lebih akurat
    // Deteksi akan menyala tepat ketika section menyentuh 20% bagian atas layar
    const observerOptions = {
        root: null,
        rootMargin: "-20% 0px -79% 0px", 
        threshold: 0
    };

    window._scrollSpyObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const currentId = entry.target.getAttribute("id");
                updateActiveMenu(currentId);
            }
        });
    }, observerOptions);

    // Pantau semua section yang memiliki ID
    sections.forEach((section) => {
        if (section.getAttribute("id")) {
            window._scrollSpyObserver.observe(section);
        }
    });

    // FALLBACK AMAN: Pastikan menu 'Home' selalu aktif jika user benar-benar scroll mentok ke atas
    if (!window._fallbackScrollSpy) {
        window.addEventListener("scroll", () => {
            if (window.scrollY < 100) {
                updateActiveMenu("home");
            }
        }, { passive: true });
        window._fallbackScrollSpy = true;
    }
    
    // ==========================================
    // 9. BENTO CARD SPOTLIGHT EFFECT
    // ==========================================
    const bentoCards = document.querySelectorAll(".bento-card");
    bentoCards.forEach((card) => {
        if (card.dataset.spotlightAttached) return;
        let rafId = null;
        card.addEventListener("mousemove", (e) => {
            if (rafId) cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(() => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left; 
                const y = e.clientY - rect.top;  
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            });
        });
        card.dataset.spotlightAttached = "true";
    });

    // ==========================================
    // 10. FITUR ON/OFF MODE (CYBERPUNK & CLEAN PRO)
    // ==========================================
    const themeBtn = document.getElementById("theme-toggle");
    // ... (hapus semua isinya) ...
    themeBtn.dataset.themeAttached = "true";
    }