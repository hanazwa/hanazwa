alert('INI ADALAH PERMAINAN SUWIT JAWA, ANDA ADALAH PLAYER BEWARNA MERAH');
const acakWarna = document.getElementById('acakWarna');
acakWarna.addEventListener('click', function(){
	const r = Math.round(Math.random() * 255);
	const g = Math.round(Math.random() * 255);
	const b = Math.round(Math.random() * 255);
	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
})

function getPilihanComputer(){
	const computer = Math.random();
	if(computer < 0.34) return 'gajah';
	if(computer >= 0.34 && computer > 0.67) return 'orang';
	return 'semut';
}

function getHasil(computer,player){
	if(player == computer) return 'SERI';
	if(player == 'gajah') return (computer == 'orang') ? 'MENANG!' : 'KALAH!';
	if(player == 'orang') return (computer == 'gajah') ? 'KALAH!' : 'MENANG!';
	if(player == 'semut') return (computer == 'orang') ? 'KALAH!' : 'MENANG!';
}

function putar(){
	const gambarcomp = document.querySelector('.satu ul li img');
	const gambar = ['gajah','orang','semut'];
	let i = 0;
	const waktuMulai = new Date().getTime();
	setInterval(function(){
		if (new Date().getTime() - waktuMulai > 1000) {
			clearInterval;
			return;
		}
		gambarcomp.setAttribute('src' , 'gambar/' + gambar[i++] + '.png');
		if(i == gambar.length) i = 0;
	}, 100);
}

const pilihan = document.querySelectorAll('.dua ul li img');
let win = 1;
let lose = 1;
pilihan.forEach(function(pil){
	
	pil.addEventListener('click', function(){		const pilihanComputer = getPilihanComputer();
		const pilihanPlayer = pil.className;
		const hasil = getHasil(pilihanComputer,pilihanPlayer);
		
		putar();
		setTimeout(function(){
			const gambarComputer = document.querySelector('.gambarComputer');
			gambarComputer.setAttribute('src', 'gambar/'+pilihanComputer+'.png');
			const info = document.querySelector('.info');
			info.innerHTML = hasil;
			const skorComp = document.querySelector('.skorComp');
			const skorPlayer = document.querySelector('.skorPlayer');
			if(hasil == 'MENANG!'){
				skorPlayer.innerHTML = win++;
			}
			if(hasil == 'KALAH!'){
				skorComp.innerHTML = lose++;	
			}
		},1000);
		sPlayer.innerHTML = pPlayer;
	})
});