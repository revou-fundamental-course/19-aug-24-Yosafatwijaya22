function formValidation() {
  // Mendapatkan nilai dari elemen form
  const name = document.getElementById('full-name').value;
  const birthDate = document.getElementById('date').value;
  const gender = document.querySelector('input[name="gender"]:checked');
  const message = document.getElementById('messages').value;
  const result = document.getElementById('result');

  // Validasi form
  if (name === "") {
      alert("Nama harus diisi.");
      return;
  }
  if (birthDate === "") {
      alert("Tanggal lahir harus diisi.");
      return;
  }
  if (!gender) {
      alert("Jenis kelamin harus dipilih.");
      return;
  }
  if (message === "") {
      alert("Pesan harus diisi.");
      return;
  }

  // Menampilkan hasil di dalam span #result
  result.textContent = `Nama: ${name}, Tanggal Lahir: ${birthDate}, Jenis Kelamin: ${gender.value}, Pesan: ${message}`;
}
