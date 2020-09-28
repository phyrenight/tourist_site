!(function(d) {
    let slides = d.getElementsByClassName('carousel__container');
    let slides_length = slides.length;
    let right_button = d.getElementsByClassName('carousel__button--right')[0];
    let left_button = d.getElementsByClassName('carousel__button--left')[0];
    let current_slide = 0;
    let prev_slide = slides_length;

    right_button.onclick  = function() {
        prev_slide = current_slide;
        if(current_slide >=  (slides_length - 1)){
            current_slide = 0;
        }else {
            current_slide += 1; 
        }
        update_page();
    }


    left_button.onclick = function() {
        prev_slide = current_slide;
        if(current_slide == 0){
            current_slide = slides_length - 1;
        } else {
            current_slide -= 1
        }
        update_page();
    }

    function update_page() {
        slides[prev_slide].classList.remove("active")
        slides[current_slide].classList.add("active");
    }

}(document))