        const inputs = document.querySelectorAll(".filters input");
        const result = document.querySelector("output");

        function handleUpdate() {
            const suffix = this.dataset.sizing || '';
            document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
            document.querySelector(`#${this.name}`).innerHTML = this.value;
        }
        inputs.forEach(input => input.addEventListener('change', handleUpdate));
        inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
        let img_load = document.querySelector(".img-load");
        let next_btn = document.querySelector(".btn-next");
        let imgs = new Array("assets/img/1.jpg", "assets/img/2.jpg", "assets/img/3.jpg", "assets/img/4.jpg");
        let i = 0;
        next_btn.onclick = function () {
            if (i < imgs.length) {
                i++;
                if (i == imgs.length) {
                    i = 0;
                    img_load.src = imgs[i];
                }
                else {
                    img_load.src = imgs[i];
                }
            }
        }
        const fileInput = document.querySelector('input[type="file"]');
        const imageContainer = document.querySelector('.img-load');
        fileInput.addEventListener('change', function (e) {
            const file = fileInput.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                imageContainer.src = reader.result;
            }
            reader.readAsDataURL(file);
        });
        const canvas = document.querySelector('canvas');
        const ctx = canvas.getContext('2d');
        const download = document.querySelector('.btn-save');
        const image = document.querySelector(".img-load");

        download.addEventListener('click', function(e){
            const blur = document.querySelector("#blur").value;
            const invert = document.querySelector("#invert").value;
            const sepia = document.querySelector("#sepia").value;
            const saturate = document.querySelector("#saturate").value;
            const hue = document.querySelector("#hue").value;
            const img = new Image();
            img.setAttribute('crossOrigin', 'anonymous');
            img.src = image.src;
            img.onload = function(){
              canvas.width = img.width;
              canvas.height = img.height;
                ctx.filter = 'blur('+ blur +'px)';
                ctx.filter += 'invert('+ invert +'%)';
                ctx.filter += 'sepia('+ sepia +'%)';
                ctx.filter += 'saturate('+ saturate +'%)';
                ctx.filter += 'hue-rotate('+ hue +'deg)';
                ctx.drawImage(img, 0, 0);
                let link = document.createElement("a");
                link.download = 'download.png';
                link.href = canvas.toDataURL();
                link.click();
                link.delete;
            };
        });

        const fullscreen_btn = document.querySelector('.fullscreen');
        fullscreen_btn.onclick = function(){
            if(window.innerHeight == screen.height)
                    document.webkitCancelFullScreen();
            else
                    document.documentElement.requestFullscreen();
      }
