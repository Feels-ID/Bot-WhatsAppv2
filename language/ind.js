exports.wait = () => {
	return`「 WAIT 」  *Sabar Tod* orang sabar di sayang janda 🤭🤭`
}

exports.succes = () => {
	return`*「 BERHASIL 」*`
}

exports.lvlon = () => {
	return`*「 HIDUP 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 MATI 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`*「 PENDAFTARAN 」*\n\nHallo omm🤓 kamu belom terdaftar di partner kami\nyuk registrasi dulu, dengan cara berikut..\n\nCommand ${prefix}daftar nama|umur\ncontoh ${prefix}daftar AGUSZ|20`
}

exports.rediregis = () => {
	return`*「 SUDAH TERDAFTAR 」*\n\n*Kamu sudah terdaftar jadi partner APBOT*`
}

exports.stikga = () => {
	return`*Yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*Maaf link tidak valid*`
}

exports.groupo = () => {
	return`❗ *「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`❗ *「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`❗ *「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`❗ *「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`❌ *「BOT HARUS JADI ADMIN」* ❌`
}

exports.nsfwoff = () => {
	return`*NSFW TIDAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner APBOT, Laporan palsu atau main² tidak akan ditanggapi.*`
}

exports.wrongf = () => {
	return`*Format salah/text kosong*`
}

exports.clears = () => {
	return`*Clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nUntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*Jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`*「 DATA PENDAFTARAN 」*\n\nkamu sudah terdaftar dengan data \n\nNAMA\n ${namaUser}\nNOMOR\nwa.me/${sender.split("@")[0]}\nUMUR\n┗⊱${umurUser}\nwaktu pendaftaran\n┗⊱${time}\n\n┏━❉ *NS* ❉━\n┣⊱${serialUser}\n┗⊱NOTE : jangan sampai lupa nomer ini karena ini penting!`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan\coba tulis *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*Maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role) => { 
	return `「 *APBOT* 」

◪ *INFO DEVELOPER*
  ❏ Nama: Muhammad Ridwan Reynaldy
  ❏ Wa: wa.me/6289694354384
  ❏ Ig: https://instagram.com/axfc_ap
  ❏ YT: https://youtube.com/channel/UCKP-E8RwFkJKhe-9uz0s9RQ
  ----------------------------------
◪ *YOUR INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Nama: ${pushname}
  ❏ Uang mu : Rp${uangku}
  ❏ Nomer: ${sender.split("@")[0]}
  ❏ XP: ${getLevelingXp(sender)}/${reqXp}
  ❏ Role : ${role}
  ❏ Level: ${getLevelingLevel(sender)}
  ❏ User register : ${_registered.length}
▬▭▬▭▬▭▬▭▬▭▬▭▬
◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}snk
  ├─ ❏ ${prefix}bug
  ├─ ❏ ${prefix}request
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}owner
◪ *MAKER*
  │
  ├─ ❏ ${prefix}nulis
  ├─ ❏ ${prefix}sticker
  ├─ ❏ ${prefix}stickergif
  ├─ ❏ ${prefix}toimg
  ├─ ❏ ${prefix}ttp
  ├─ ❏ ${prefix}phlogo
  ├─ ❏ ${prefix}wolflogo
  ├─ ❏ ${prefix}bplogo
  ├─ ❏ ${prefix}glitch
  ├─ ❏ ${prefix}thunder
  ├─ ❏ ${prefix}text3d
  ├─ ❏ ${prefix}hartatata
  ├─ ❏ ${prefix}quotemaker
  ├─ ❏ ${prefix}imgmaker
  └─ ❏ ${prefix}calendermaker
◪ *MEDIA*
  │
  ├─ ❏ ${prefix}beritahoax
  └─ ❏ ${prefix}trendtwit
◪ *OTHER FITUR*
  │
  ├─ ❏ ${prefix}ssweb
  ├─ ❏ ${prefix}hilih 
  ├─ ❏ ${prefix}alay 
  ├─ ❏ ${prefix}wiki
  ├─ ❏ ${prefix}kbbi
  ├─ ❏ ${prefix}map
  ├─ ❏ ${prefix}fml
  ├─ ❏ ${prefix}lirik
  ├─ ❏ ${prefix}brainly
  ├─ ❏ ${prefix}bitly
  ├─ ❏ ${prefix}chord
  ├─ ❏ ${prefix}katacinta
  ├─ ❏ ${prefix}katabijak
  ├─ ❏ ${prefix}faktaunik
  ├─ ❏ ${prefix}pantun
  └─ ❏ ${prefix}artinama
◪ *KERANG AJAIB*
  │
  ├─ ❏ ${prefix}gantengcek
  ├─ ❏ ${prefix}cantikcek
  ├─ ❏ ${prefix}watak
  ├─ ❏ ${prefix}hobby
  ├─ ❏ ${prefix}apakah
  ├─ ❏ ${prefix}kapankah
  ├─ ❏ ${prefix}bisakah
  └─ ❏ ${prefix}rate
◪ *DOWNLOADER*
  │
  ├─ ❏ ${prefix}pinterest 
  ├─ ❏ ${prefix}ytmp3 
  ├─ ❏ ${prefix}ytmp4
  ├─ ❏ ${prefix}fototiktok
  └─ ❏ ${prefix}joox
◪ *MEME*
  │
  ├─ ❏ ${prefix}meme ❌
  └─ ❏ ${prefix}memeindo
◪ *FIND TARGET*
  │
  ├─ ❏ ${prefix}mutual
  └─ ❏ ${prefix}next
◪ *RANDOM PICTURE*
        *ANIME*
  │
  ├─ ❏ ${prefix}loli
  ├─ ❏ ${prefix}neko
  ├─ ❏ ${prefix}waifu
  ├─ ❏ ${prefix}animecry
  ├─ ❏ ${prefix}animehug
  ├─ ❏ ${prefix}osakana
  ├─ ❏ ${prefix}naruto
  ├─ ❏ ${prefix}anime
  ├─ ❏ ${prefix}husbu
  ├─ ❏ ${prefix}animegirl
  ├─ ❏ ${prefix}animeboy
  ├─ ❏ ${prefix}nekonime
  │
◪  *RANDOM KPOP*
  ├─ ❏ ${prefix}randomkpop
  │
◪ *CARTOON*
  ├─ ❏ ${prefix}doraemon
  ├─ ❏ ${prefix}pokemon
  │
◪ *ANIMAL*
  ├─ ❏ ${prefix}anjing
  ├─ ❏ ${prefix}kucing
  ├─ ❏ ${prefix}hamster
  ├─ ❏ ${prefix}kelinci
  │
◪  *TRANSPORT*
  ├─ ❏ ${prefix}mobil
  ├─ ❏ ${prefix}motor
  ├─ ❏ ${prefix}sepeda
  │
◪  *AESTHETIC*
  ├─ ❏ ${prefix}aesthetic
  ├─ ❏ ${prefix}bluesky
  ├─ ❏ ${prefix}flower
  ├─ ❏ ${prefix}icecream
  ├─ ❏ ${prefix}pemandangan
  │
◪  *QUOTES PICTURE*
  ├─ ❏ ${prefix}quotesid
  ├─ ❏ ${prefix}quotesen
  ├─ ❏ ${prefix}katakata
  ├─ ❏ ${prefix}motivasi
  ├─ ❏ ${prefix}kehidupan
  └─ ❏ ${prefix}islami
◪ *QUOTES*
  │
  ├─ ❏ ${prefix}quotes
  ├─ ❏ ${prefix}quoteskehidupan
  ├─ ❏ ${prefix}quotesislami
  ├─ ❏ ${prefix}quotesnasehat
  ├─ ❏ ${prefix}animequotes
  └─ ❏ ${prefix}twichquotes
◪ *LIMIT & UANG & LB*
  │
  ├─ ❏ ${prefix}limit
  ├─ ❏ ${prefix}buylimit
  └─ ❏ ${prefix}leaderboard
◪ *SOUND*
  │
  ├─ ❏ ${prefix}play
  └─ ❏ ${prefix}tts
◪ *ISLAM*
  │
  ├─ ❏ ${prefix}jadwalsholat 
  └─ ❏ ${prefix}quran
◪ *STALK*
  │
  ├─ ❏ ${prefix}tiktokstalk
  └─ ❏ ${prefix}igstalk
◪ *WIBU*
  │
  ├─ ❏ ${prefix}neonime
  └─ ❏ ${prefix}wait
◪ *APK*
  ├─ ❏ ${prefix}apkpure 
  ├─ ❏ ${prefix}happymod 
  ├─ ❏ ${prefix}moddroid 
◪ *18+ Nsfw*
  |
  ├─ ❏ ${prefix}blowjob
  ├─ ❏ ${prefix}randomhentai
  └─ ❏ ${prefix}nsfwneko
◪ *FUN*
  │
  ├─ ❏ ${prefix}truth
  ├─ ❏ ${prefix}dare
  ├─ ❏ ${prefix}slap
  ├─ ❏ ${prefix}tampar
  ├─ ❏ ${prefix}nangis
  ├─ ❏ ${prefix}cium
  └─ ❏ ${prefix}simi
◪ *INFORMATION*
  │
  ├─ ❏ ${prefix}bahasa
  ├─ ❏ ${prefix}kodenegara
  ├─ ❏ ${prefix}infogempa
  ├─ ❏ ${prefix}infocuaca
  ├─ ❏ ${prefix}infonomor
  └─ ❏ ${prefix}covid
◪ *GROUP*
  │
  ├─ ❏ ${prefix}tagall
  ├─ ❏ ${prefix}listadmin
  ├─ ❏ ${prefix}linkgc
  ├─ ❏ ${prefix}mining
  ├─ ❏ ${prefix}level
  ├─ ❏ ${prefix}setpp
  ├─ ❏ ${prefix}setdesc
  ├─ ❏ ${prefix}setname
  ├─ ❏ ${prefix}grup [buka/tutup)
  ├─ ❏ ${prefix}welcome [1/0]
  ├─ ❏ ${prefix}nsfw [1/0]
  ├─ ❏ ${prefix}leveling [1/0]
  └─ ❏ ${prefix}simih [1/0]
◪ *OWNER*
  │
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}setreply
  ├─ ❏ ${prefix}setmemlimit
  ├─ ❏ ${prefix}setppbot
  ├─ ❏ ${prefix}block
  ├─ ❏ ${prefix}unblock
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}event [1/0]
  ├─ ❏ ${prefix}clone
  └─ ❏ ${prefix}clearall
◪ *OTHER*
  │
  ├─ ❏ ${prefix}wame
  ├─ ❏ ${prefix}qrcode
  └─ ❏ ${prefix}afk
◪ *POWERED BY APBOT*
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
*「 SELAMAT 」*
  ❏ Nama : ${pushname}
  ❏ Nomer : ${sender.split("@")[0]}
  ❏ Xp : ${getLevelingXp(sender)}
  ❏ Limit :  +3
  ❏ Role :  ${role}
  ❏ Level : ${getLevel} ⊱ ${getLevelingLevel(sender)}
`}
 
exports.limitend = (pushname) => {
	return`*Maaf ${pushname} limit hari ini habis*\n*Hubungi kami* : wa.me/62895330379186`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : Untuk mendapatkan limit. Bisa lewat naik level melalui group atau buylimit.
`}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`◪ *「 ATM 」*\n  ├─ ❏ *NAMA* : ${pushname}\n  ├─ ❏ *NOMOR* : ${sender.split("@")[0]}\n  └─ ❏ *Uang* : ${uangkau}
`}
