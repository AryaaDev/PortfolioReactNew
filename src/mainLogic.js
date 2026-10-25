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
    observeMultipleOnce(".sertifikat-item", ["animate"], 0.25);
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
// ==========================================
const filterButtons = document.querySelectorAll(".filter-btn");
const portfolioItems = Array.from(
    document.querySelectorAll(".portfolio-item")
);
const portfolioWrapper = document.querySelector(".portfolio-3d-sampul");

// Cache elemen yang sering digunakan
const emptyState = document.querySelector(".portfolio-empty-state");
const currentCounter = document.querySelector(".carousel-counter .current");
const totalCounter = document.querySelector(".carousel-counter .total");
const carouselDots = Array.from(
    document.querySelectorAll(".carousel-dots .dot")
);

let activeIndex = 0;
let filteredItems = portfolioItems;

function update3DCarousel() {
    const itemCount = filteredItems.length;

    // Reset state semua project
    portfolioItems.forEach(item => {
        item.classList.remove("active", "prev", "next");
    });

    // ==========================================
    // EMPTY STATE
    // ==========================================
    if (itemCount === 0) {
        if (emptyState) {
            emptyState.style.display = "flex";
            emptyState.setAttribute("aria-hidden", "false");
        }

        if (currentCounter) {
            currentCounter.textContent = "00";
        }

        if (totalCounter) {
            totalCounter.textContent = "00";
        }

        carouselDots.forEach(dot => {
            dot.style.display = "none";
            dot.classList.remove("active");
        });

        return;
    }

    // ==========================================
    // PROJECT TERSEDIA
    // ==========================================
    if (emptyState) {
        emptyState.style.display = "none";
        emptyState.setAttribute("aria-hidden", "true");
    }

    // Pastikan index selalu valid
    if (activeIndex >= itemCount) {
        activeIndex = 0;
    }

    const previousIndex = (activeIndex - 1 + itemCount) % itemCount;
    const nextIndex = (activeIndex + 1) % itemCount;

    filteredItems.forEach((item, index) => {
        if (index === activeIndex) {
            item.classList.add("active");
        } else if (index === previousIndex) {
            item.classList.add("prev");
        } else if (index === nextIndex) {
            item.classList.add("next");
        }
    });

    // ==========================================
    // COUNTER
    // ==========================================
    if (currentCounter) {
        currentCounter.textContent = String(activeIndex + 1).padStart(2, "0");
    }

    if (totalCounter) {
        totalCounter.textContent = String(itemCount).padStart(2, "0");
    }

    // ==========================================
    // DOTS
    // ==========================================
    carouselDots.forEach((dot, index) => {
        const visible = index < itemCount;

        dot.style.display = visible ? "block" : "none";
        dot.classList.toggle(
            "active",
            visible && index === activeIndex
        );
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

                    // Abaikan jika tombol yang sama diklik lagi
                    if (btn.classList.contains("active")) return;

                    // Tombol aktif
                    filterButtons.forEach(b => b.classList.remove("active"));
                    btn.classList.add("active");

                    const filter = btn.dataset.filter;

                    // Tentukan project berdasarkan kategori
                    filteredItems = filter === "all"
                        ? portfolioItems
                        : portfolioItems.filter(
                            item => item.dataset.category === filter
                        );

                    // Selalu mulai dari project pertama
                    activeIndex = 0;

                    // Beri kesempatan browser menyelesaikan
                    // perubahan visual sebelum carousel diperbarui
                    requestAnimationFrame(() => {
                        update3DCarousel();
                    });
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

    // --- 5. DRAG MOUSE & SWIPE TOUCH (REAL-TIME NATIVE FEEL - OPTIMIZED) ---
    if (portfolioWrapper && !portfolioWrapper.dataset.swipeAttached) {
        let isDragging = false;
        let startPos = 0;
        const dragThreshold = 50; 
        
        // VARIABEL CACHE BARU: Untuk menyimpan memori agar HP tidak bekerja keras
        let activeCardCache = null; 
        let animationFrameId = null;

        portfolioWrapper.addEventListener("pointerdown", (e) => {
            // Abaikan drag jika user menekan tombol slider dalam gambar atau link!
            if (e.target.closest("button") || e.target.closest(".slider-btn") || e.target.closest("a")) {
                return; 
            }
            
            isDragging = true;
            startPos = e.clientX;
            portfolioWrapper.style.cursor = "grabbing";

            // CACHE DOM: Cari kartu aktif SEKALi saja saat layar disentuh, bukan pas digeser
            activeCardCache = document.querySelector(".portfolio-item.active");
            
            if (activeCardCache) {
                // Matikan transisi cukup SEKALI di awal drag
                activeCardCache.style.transition = "none"; 
            }
        });

        portfolioWrapper.addEventListener("pointermove", (e) => {
            if (!isDragging || !activeCardCache) return;

            const currentPosition = e.clientX;
            const diff = currentPosition - startPos;

            // Cegah scroll browser saat user menggeser kartu
            if (Math.abs(diff) > 10) {
                e.preventDefault();
            }

            // OPTIMASI UTAMA: Bersihkan antrean animasi sebelumnya
            if (animationFrameId) cancelAnimationFrame(animationFrameId);

            // Gunakan requestAnimationFrame agar animasi berjalan mulus di 60FPS
            animationFrameId = requestAnimationFrame(() => {
                const moveX = Math.max(-150, Math.min(150, diff));
                const rotateY = moveX * 0.1; 
                
                // Gunakan translate3d untuk memaksa GPU (Hardware Acceleration) bekerja
                activeCardCache.style.transform = `scale(1) translate3d(${moveX}px, 0, 0) rotateY(${rotateY}deg)`;
            });
        });

        const stopDrag = (e) => {
            if (!isDragging) return;
            isDragging = false;
            portfolioWrapper.style.cursor = "default";
            
            // Bersihkan sisa animasi yang mungkin tertinggal
            if (animationFrameId) cancelAnimationFrame(animationFrameId);
            
            const currentPosition = e.clientX;
            const diff = currentPosition - startPos;

            if (activeCardCache) {
                // Kembalikan transisi animasi saat dilepas
                activeCardCache.style.transition = "transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)"; 
                activeCardCache.style.transform = "";  
                
                // Buat variabel sementara karena setTimeout akan berjalan nanti
                const cardToClean = activeCardCache;
                
                setTimeout(() => {
                    if (cardToClean) cardToClean.style.transition = "";
                }, 500); 
                
                // Kosongkan cache untuk geseran berikutnya
                activeCardCache = null;
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
    const slider = document.getElementById(`portfolio-slider-${id}`);
    if (!slider) return;

    const images = [...slider.querySelectorAll(".slider-img")];
    if (images.length < 2) return;

    // Cegah klik berulang saat animasi masih berlangsung
    if (slider.dataset.sliding === "true") return;

    const currentIndex = images.findIndex(
        img => img.classList.contains("active")
    );

    if (currentIndex < 0) return;

    const nextIndex =
        (currentIndex + direction + images.length) % images.length;

    const currentImage = images[currentIndex];
    const nextImage = images[nextIndex];

    const duration = 500;

    // Klik kanan:
    // gambar lama keluar kiri, gambar baru masuk dari kanan
    //
    // Klik kiri:
    // gambar lama keluar kanan, gambar baru masuk dari kiri
    const currentOut =
        direction > 0
            ? "-100%"
            : "100%";

    const nextStart =
        direction > 0
            ? "100%"
            : "-100%";

    slider.dataset.sliding = "true";

    // Siapkan gambar lama
    currentImage.style.transition =
        `transform ${duration}ms cubic-bezier(0.25, 1, 0.5, 1)`;
    currentImage.style.transform =
        "translate3d(0, 0, 0)";
    currentImage.style.opacity = "1";
    currentImage.style.zIndex = "2";

    // Siapkan gambar baru di luar layar
    nextImage.style.transition = "none";
    nextImage.style.transform =
        `translate3d(${nextStart}, 0, 0)`;
    nextImage.style.opacity = "1";
    nextImage.style.zIndex = "3";

    nextImage.classList.add("active");

    // Beri browser kesempatan menerapkan posisi awal
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {

            // Gambar lama keluar
            currentImage.style.transform =
                `translate3d(${currentOut}, 0, 0)`;

            // Gambar baru masuk
            nextImage.style.transition =
                `transform ${duration}ms cubic-bezier(0.25, 1, 0.5, 1)`;

            nextImage.style.transform =
                "translate3d(0, 0, 0)";
        });
    });

    // Bersihkan setelah animasi selesai
    setTimeout(() => {
        currentImage.classList.remove("active");

        currentImage.style.transition = "";
        currentImage.style.transform = "";
        currentImage.style.opacity = "";
        currentImage.style.zIndex = "";

        nextImage.classList.add("active");

        nextImage.style.transition = "";
        nextImage.style.transform = "";
        nextImage.style.opacity = "";
        nextImage.style.zIndex = "";

        slider.dataset.sliding = "false";
    }, duration + 30);
};

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
    if (modal.dataset.zoomAttached === "true") return;

    let scale = 1;
    let lastScale = 1;

    let translateX = 0;
    let translateY = 0;
    let lastTranslateX = 0;
    let lastTranslateY = 0;

    let startDistance = null;
    let isDragging = false;

    let startX = 0;
    let startY = 0;

    let lastTap = 0;

    let originX = 0;
    let originY = 0;

    let frameId = null;

    // Cache ukuran gambar agar tidak dihitung berulang saat drag
    let imageWidth = 0;
    let imageHeight = 0;

    // Respect user accessibility preference
    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    // Dasar transform
    img.style.transformOrigin = "center center";
    img.style.touchAction = "none";
    img.style.userSelect = "none";
    img.style.webkitUserSelect = "none";
    img.style.webkitUserDrag = "none";

    // Transition hanya dipakai saat reset / double tap,
    // BUKAN saat jari sedang bergerak.
    const resetTransition = reduceMotion
        ? "none"
        : "transform 0.2s cubic-bezier(0.25, 1, 0.5, 1)";

    const applyTransform = () => {
        if (frameId) {
            cancelAnimationFrame(frameId);
        }

        frameId = requestAnimationFrame(() => {
            img.style.transform =
                `translate3d(${translateX}px, ${translateY}px, 0) scale(${scale})`;

            frameId = null;
        });
    };

    const setInteractionMode = (active) => {
        img.style.willChange = active ? "transform" : "auto";

        // Saat gesture berlangsung, jangan gunakan transition
        img.style.transition = active ? "none" : resetTransition;
    };

    const resetZoom = (animated = true) => {
        scale = 1;
        lastScale = 1;

        translateX = 0;
        translateY = 0;

        lastTranslateX = 0;
        lastTranslateY = 0;

        startDistance = null;
        isDragging = false;

        img.style.transition =
            animated && !reduceMotion
                ? resetTransition
                : "none";

        applyTransform();

        // will-change hanya selama interaksi
        requestAnimationFrame(() => {
            img.style.willChange = "auto";
        });
    };

    const getDistance = (touches) => {
        const dx = touches[0].clientX - touches[1].clientX;
        const dy = touches[0].clientY - touches[1].clientY;

        return Math.hypot(dx, dy);
    };

    const getMidpoint = (touches) => ({
        x: (touches[0].clientX + touches[1].clientX) / 2,
        y: (touches[0].clientY + touches[1].clientY) / 2
    });

    modal.addEventListener(
        "touchstart",
        (e) => {
            if (e.touches.length > 2) return;

            const now = performance.now();

            // Double tap = reset zoom
            if (e.touches.length === 1 && now - lastTap < 350) {
                resetZoom(true);
                lastTap = 0;
                e.preventDefault();
                return;
            }

            lastTap = now;

            setInteractionMode(true);

            // PINCH ZOOM
            if (e.touches.length === 2) {
                startDistance = getDistance(e.touches);

                const midpoint = getMidpoint(e.touches);
                const rect = img.getBoundingClientRect();

                originX = midpoint.x - rect.left;
                originY = midpoint.y - rect.top;

                img.style.transformOrigin =
                    `${originX}px ${originY}px`;

                imageWidth = img.offsetWidth;
                imageHeight = img.offsetHeight;

                e.preventDefault();
                return;
            }

            // PAN GAMBAR SAAT ZOOM
            if (e.touches.length === 1 && scale > 1) {
                const touch = e.touches[0];

                isDragging = true;

                startX = touch.clientX - lastTranslateX;
                startY = touch.clientY - lastTranslateY;

                imageWidth = img.offsetWidth;
                imageHeight = img.offsetHeight;

                e.preventDefault();
            }
        },
        { passive: false }
    );

    modal.addEventListener(
        "touchmove",
        (e) => {
            if (e.touches.length > 2) return;

            // PINCH
            if (e.touches.length === 2 && startDistance) {
                const currentDistance = getDistance(e);

                const ratio =
                    currentDistance / startDistance;

                scale = Math.max(
                    1,
                    Math.min(3, lastScale * ratio)
                );

                applyTransform();

                e.preventDefault();
                return;
            }

            // PAN
            if (e.touches.length === 1 && isDragging && scale > 1) {
                const touch = e.touches[0];

                translateX =
                    touch.clientX - startX;

                translateY =
                    touch.clientY - startY;

                // Batas pergerakan gambar
                const maxX =
                    (imageWidth * (scale - 1)) / 2;

                const maxY =
                    (imageHeight * (scale - 1)) / 2;

                translateX = Math.max(
                    -maxX,
                    Math.min(maxX, translateX)
                );

                translateY = Math.max(
                    -maxY,
                    Math.min(maxY, translateY)
                );

                applyTransform();

                e.preventDefault();
            }
        },
        { passive: false }
    );

    modal.addEventListener(
        "touchend",
        (e) => {
            lastScale = scale;

            lastTranslateX = translateX;
            lastTranslateY = translateY;

            if (e.touches.length < 2) {
                startDistance = null;
            }

            if (e.touches.length === 0) {
                isDragging = false;

                // Gesture selesai → transition boleh dikembalikan
                img.style.transition = resetTransition;

                // Jangan pertahankan will-change terus-menerus
                requestAnimationFrame(() => {
                    img.style.willChange = "auto";
                });
            }
        },
        { passive: true }
    );

    // Reset ketika modal ditutup / dibuka kembali
    const observer = new MutationObserver(() => {
        if (!modal.classList.contains("show")) {
            resetZoom(false);
        }
    });

    observer.observe(modal, {
        attributes: true,
        attributeFilter: ["class"]
    });

    modal.dataset.zoomAttached = "true";
}

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
    const bentoCards = document.querySelectorAll(".soft-skills-kotak");
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

}