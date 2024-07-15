import mongoose from "mongoose";

const connectDB = async (DATABASEURL) => {
    const DB_OPTIONS = {
        dbName: 'portofolio',
      
        // Opsional, tambahkan opsi lainnya sesuai kebutuhan
    };

    try {
        await mongoose.connect(DATABASEURL, DB_OPTIONS);
        console.log('Koneksi database berhasil');
    } catch (error) {
        console.error('Koneksi database gagal:', error.message);
        // Anda bisa menambahkan log atau penanganan error lainnya di sini
        process.exit(1); // Ini opsional, tergantung pada bagaimana Anda ingin menangani error ini
    }
};

export default connectDB;
