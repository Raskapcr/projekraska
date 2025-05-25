export default function Artikel() {
    return (
        <div className="card">
            <Judul />
            <Gambar />
            <Isi />
        </div>
    );
}

function Judul() {
    return <h2>Dumbbel Arm Exercise</h2>;
}

function Gambar() {
    return (
        <center>
            <img src="img/gmbr.jpg" alt="gambare" width={400} height={300} />
            <h5>Pembukaan</h5>
        </center>
    );
}

function Isi() {
    return (
        <div>
            <Paragraf1 />
            <Paragraf2 />
            <Paragraf3 />
            <Paragraf4 />
        </div>
    );
}

function Paragraf1() {
    return (
        <p>
           Latihan lengan dengan dumbbell sudah ada sejak zaman kuno. Bangsa Yunani dan Romawi menggunakan beban tangan yang disebut "halteres", yang merupakan cikal bakal dumbbell modern. Seiring perkembangan waktu, latihan dengan dumbbell menjadi bagian dari strength training yang lebih sistematis, terutama berkembang pesat di era binaraga pada abad ke-20.
        </p>
    );
}

function Paragraf2() {
    return (
        <p>
            Untuk melatih otot lengan secara efektif, beberapa gerakan yang direkomendasikan antara lain:

Bicep Curl – Melatih otot bicep dengan gerakan mengangkat dumbbell ke arah bahu.
Hammer Curl – Variasi bicep curl yang lebih fokus pada otot brachialis dan forearm.
Overhead Triceps Extension – Melatih triceps dengan mengangkat dumbbell ke atas kepala lalu menurunkannya di belakang kepala.
Lateral Raise – Mengembangkan otot bahu dengan mengangkat dumbbell ke samping setinggi bahu.
Zottman Curl – Kombinasi bicep curl dan hammer curl untuk kekuatan keseluruhan lengan.
Reverse Curl – Menargetkan otot brachioradialis (forearm) dengan genggaman telapak tangan menghadap ke bawah.
        </p>
    );
}

function Paragraf3() {
    return (
        <p>
           Alat yang Digunakan
Dumbbell ; Tersedia dalam berbagai jenis (adjustable, hex, rubber-coated, dll.).
Bangku latihan (Bench) – Berguna untuk variasi latihan seperti incline curl atau seated overhead extension.
Strap tangan (Wrist Straps) – Membantu pegangan agar lebih kuat.
        </p>
    );
}

function Paragraf4() {
    return (
        <p>
Arnold Schwarzenegger terkenal dengan rutinitas bicep curl-nya, yang membantu membentuk lengan ikoniknya.
Dumbbell pertama yang dibuat dengan desain modern muncul pada abad ke-17 di Inggris.
Latihan dengan dumbbell tidak hanya membangun otot tetapi juga meningkatkan koordinasi dan keseimbangan tubuh.
Latihan dengan beban ringan dan repetisi tinggi dapat meningkatkan ketahanan otot, sementara beban berat dengan repetisi rendah lebih fokus pada pertumbuhan massa otot.💪🔥🚀.
        </p>
    );
}