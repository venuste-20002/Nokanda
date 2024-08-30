<div class="responsive">
</div>


<style>
    .responsive {
        flex: 1;
        background-image: url("assets/image1.jpeg");
        background-size: cover;
        background-position: center;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 230px;
        width: 100%;
    }

    @media (max-width: 1100px) {
        .responsive {
            display: none;
        }
    }
</style>