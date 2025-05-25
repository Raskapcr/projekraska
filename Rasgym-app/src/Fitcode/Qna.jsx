export default function ProdukList() {
    const propsUserCard = {
        nama: "pullup",
        harga: "Rp.675.000",
        gambar: "img/pullup.jpeg"
    };

    return (
        <div className="card">
            <h2> Fitness</h2>
 
            <UserCard 
                nama="Barbell" 
                harga="Rp.1.000.000"
                gambar="img/barbell.jpeg"  
            />
 
            <UserCard {...propsUserCard} />
        </div>
    );
}

// Komponen UserCard yang mendukung gambar
function UserCard(props) {
    return (
        <div>
            <hr/>
            <h3>Nama Alat: {props.nama}</h3>
            <h3>Harga: {props.harga}</h3>
            {props.gambar && (
                <div>
                    <center>
                        <img src={props.gambar} alt={props.nama} width={600} height={300} />
                    </center>
                </div>
            )}
        </div>
    );
}
