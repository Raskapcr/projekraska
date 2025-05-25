export default function ProdukList() {
    const propsUserCard = {
        nama: "Satu Set Dumball",
        harga: "Rp1.675.000",
        gambar: "img/satuset.jpeg"
        
    };

    return (
        <div className="card">
            <h2>Peralatan </h2>
 
            <UserCard 
                nama="kettlebell" 
                harga="Rp400.000"
                gambar="img/dumball.jpeg"  
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
