import styles from "./serieItem.module.scss";

export default function SerieItem(){
    return (
        <div className={styles.background}>
            <div className={styles.background_container}>
                <div className={styles.background_container_span_container}>
                    <span>English title:</span>
                    <span>ASD EN TITLE</span>
                    <span>Hungarian title:</span>
                    <span>ASD HUN TITLE</span>
                    <span>English description:</span>
                    <span>ASD EN DESC
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus, magni dolorem odio tempora fugit ullam laborum, voluptatem maiores mollitia illo officiis nulla deserunt rerum esse molestiae doloremque modi at reiciendis veniam! Provident velit nihil minus dolorem rerum doloremque consequuntur excepturi dolore et repellat nemo maiores adipisci odio quidem quam, nam accusantium expedita eveniet nesciunt praesentium aut, architecto quibusdam! Perspiciatis non hic consequuntur quam cupiditate libero repellendus tempore totam facilis illo numquam eligendi ipsa voluptatum recusandae, saepe voluptatibus rem. Ipsam fugit est nesciunt autem perferendis possimus, a iure ducimus neque debitis expedita sint natus quisquam sunt tempore animi provident et.

                    </span>
                    <span>Hungarian description:</span>
                    <span>ASD HUN DESC
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis voluptatibus, magni dolorem odio tempora fugit ullam laborum, voluptatem maiores mollitia illo officiis nulla deserunt rerum esse molestiae doloremque modi at reiciendis veniam! Provident velit nihil minus dolorem rerum doloremque consequuntur excepturi dolore et repellat nemo maiores adipisci odio quidem quam, nam accusantium expedita eveniet nesciunt praesentium aut, architecto quibusdam! Perspiciatis non hic consequuntur quam cupiditate libero repellendus tempore totam facilis illo numquam eligendi ipsa voluptatum recusandae, saepe voluptatibus rem. Ipsam fugit est nesciunt autem perferendis possimus, a iure ducimus neque debitis expedita sint natus quisquam sunt tempore animi provident et.
                    </span>
                </div>
            </div>
        </div>
    );
}