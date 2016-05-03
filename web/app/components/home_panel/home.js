import './home.css!'
import template from './home.html!text'
import Vue from 'vue'


export default Vue.extend({
    template,
    data: () => ({
        current_slide: 0,
        slides: [
            {
                message: "Hello slide 1",
                url:"https://s3-eu-west-1.amazonaws.com/com-a2zcloud-assets/images/a2z-users/landscapes/land10.jpg",
            },
            {
                message: "Hello slide 2",
                url: "https://s3-eu-west-1.amazonaws.com/com-a2zcloud-assets/images/a2z-users/landscapes/land11.jpg",
            },
        ],
    }),
    computed: {

    },
    ready() {

    },
    methods: {
        next_slide() {
            var next = this.current_slide + 1
            if( next > this.slides.length - 1 ) {
                this.current_slide = 0
                return
            }
            this.current_slide = next
        },
        is_current_slide(index) {
            return (this.current_slide == index)
        },
    },
})
