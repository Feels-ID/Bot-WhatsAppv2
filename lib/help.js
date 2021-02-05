
const help = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku) => { 
	return `
「 *APBOT* 」
◪ *INFO DEVELOPER*
  ❏ Nama: AGUSZ PAKEZ
  ❏ Wa: wa.me/6289694354384
  ❏ Ig: https://instagram.com/axfc_ap
  ----------------------------------
◪ *YOUR INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Nama: ${pushname}
  ❏ Uang mu : Rp${uangku}
  ❏ Nomer: ${sender.split("@")[0]}
  ❏ XP: ${getLevelingXp(sender)}/${reqXp}
  ❏ Level: ${getLevelingLevel(sender)}
  ❏ User register : ${_registered.length}

◪ *ABOUT*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}snk
  ├─ ❏ ${prefix}bug
  ├─ ❏ ${prefix}request
  ├─ ❏ ${prefix}blocklist
  ├─ ❏ ${prefix}owner
  ├─ ❏ ${prefix}bot
  └─ ❏ ${prefix}ping
◪ *MAKER*
  │
  ├─ ❏ ${prefix}nulis
  ├─ ❏ ${prefix}sticker
  ├─ ❏ ${prefix}stickergif
  ├─ ❏ ${prefix}toimg
  ├─ ❏ ${prefix}bplogo
  ├─ ❏ ${prefix}sandwrite
  ├─ ❏ ${prefix}swlogo2
  ├─ ❏ ${prefix}text3d
  ├─ ❏ ${prefix}thunder
  ├─ ❏ ${prefix}glitch
  ├─ ❏ ${prefix}cloudsky
  ├─ ❏ ${prefix}quotemaker
  ├─ ❏ ${prefix}blood
  ├─ ❏ ${prefix}realcloud
  ├─ ❏ ${prefix}metaldark
  ├─ ❏ ${prefix}dropwater
  ├─ ❏ ${prefix}phlogo
  ├─ ❏ ${prefix}grenneon
  ├─ ❏ ${prefix}neontext
  ├─ ❏ ${prefix}toxic
  ├─ ❏ ${prefix}sumery
  ├─ ❏ ${prefix}firework
  ├─ ❏ ${prefix}lava
  ├─ ❏ ${prefix}vinta
  ├─ ❏ ${prefix}avengers
  ├─ ❏ ${prefix}wolflogo
  ├─ ❏ ${prefix}lionlogo
  ├─ ❏ ${prefix}ninjalogo
  ├─ ❏ ${prefix}jokerlogo
  ├─ ❏ ${prefix}sumery
  └─ ❏ ${prefix}summer
◪ *MEDIA*
  │
  ├─ ❏ ${prefix}beritahoax
  └─ ❏ ${prefix}trendtwit
◪ *OTHER FITUR*
  │
  ├─ ❏ ${prefix}ssweb
  ├─ ❏ ${prefix}hilih [teks]
  ├─ ❏ ${prefix}alay [teks]
  ├─ ❏ ${prefix}wiki [teks]
  ├─ ❏ ${prefix}kbbi [teks]
  ├─ ❏ ${prefix}map [teks]
  ├─ ❏ ${prefix}fml
  ├─ ❏ ${prefix}lirik [teks]
  ├─ ❏ ${prefix}brainly [teks]
  ├─ ❏ ${prefix}bitly
  ├─ ❏ ${prefix}chord [teks]
  ├─ ❏ ${prefix}katacinta
  ├─ ❏ ${prefix}pantun
  ├─ ❏ ${prefix}quotes
  ├─ ❏ ${prefix}animequotes
  └─ ❏ ${prefix}artinama [teks]
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
  ├─ ❏ ${prefix}pinterest [teks]
  ├─ ❏ ${prefix}ytmp3 [link]
  ├─ ❏ ${prefix}ytmp4 [link]
  ├─ ❏ ${prefix}fototiktok
  └─ ❏ ${prefix}joox [teks]
◪ *MEME*
  │
  ├─ ❏ ${prefix}meme ❌
  └─ ❏ ${prefix}memeindo ❌
◪ *FIND TARGET*
  │
  ├─ ❏ ${prefix}mutual
  └─ ❏ ${prefix}next
◪ *RANDOM PICTURE*
  │ *ANIME*
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
◪ *RANDOM KPOP*
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
◪ *TRANSPORT*
  ├─ ❏ ${prefix}mobil
  ├─ ❏ ${prefix}motor
  ├─ ❏ ${prefix}sepeda
  │
◪ *AESTHETIC*
  ├─ ❏ ${prefix}aesthetic
  ├─ ❏ ${prefix}bluesky
  ├─ ❏ ${prefix}flower
  ├─ ❏ ${prefix}icecream
  ├─ ❏ ${prefix}pemandangan
  │
◪ *QUOTES*
  ├─ ❏ ${prefix}quotesid
  ├─ ❏ ${prefix}quotesen
  ├─ ❏ ${prefix}katakata
  ├─ ❏ ${prefix}motivasi
  ├─ ❏ ${prefix}kehidupan
  └─ ❏ ${prefix}islami
◪ *LIMIT & UANG*
  │
  ├─ ❏ ${prefix}limit
  ├─ ❏ ${prefix}buylimit
  ├─ ❏ ${prefix}transfer
  └─ ❏ ${prefix}dompet
◪ *GROUP*
  │
  ├─ ❏ ${prefix}promote [@tag]
  ├─ ❏ ${prefix}demote [@tag]
  ├─ ❏ ${prefix}tagall
  ├─ ❏ ${prefix}hidetag
  ├─ ❏ ${prefix}grouplist
  ├─ ❏ ${prefix}add [62]
  ├─ ❏ ${prefix}kick [@tag]
  ├─ ❏ ${prefix}setname
  ├─ ❏ ${prefix}setdesc
  ├─ ❏ ${prefix}setpp
  ├─ ❏ ${prefix}listadmin
  ├─ ❏ ${prefix}linkgc
  ├─ ❏ ${prefix}leave
  ├─ ❏ ${prefix}mining
  ├─ ❏ ${prefix}level
  ├─ ❏ ${prefix}grup [buka/tutup)
  ├─ ❏ ${prefix}welcome [1/0]
  ├─ ❏ ${prefix}nsfw [1/0]
  ├─ ❏ ${prefix}leveling [1/0]
  └─ ❏ ${prefix}simih [1/0]
◪ *SOUND*
  │
  ├─ ❏ ${prefix}play [teks]
  └─ ❏ ${prefix}tts
◪ *ISLAM*
  │
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
  ├─ ❏ ${prefix}apkpure [teks]
  ├─ ❏ ${prefix}happymod [teks]
  ├─ ❏ ${prefix}moddroid [teks]
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
  └─ ❏ ${prefix}covid ❌
◪ *OWNER*
  │
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}setreply
  ├─ ❏ ${prefix}setppbot
  ├─ ❏ ${prefix}block
  ├─ ❏ ${prefix}unblock
  ├─ ❏ ${prefix}setprefix
  ├─ ❏ ${prefix}leave
  ├─ ❏ ${prefix}kickall
  ├─ ❏ ${prefix}event [1/0]
  ├─ ❏ ${prefix}bc
  ├─ ❏ ${prefix}bcgc
  ├─ ❏ ${prefix}clone
  └─ ❏ ${prefix}clearall
◪ *OTHER*
  │
  ├─ ❏ ${prefix}wame
  ├─ ❏ ${prefix}qrcode
  └─ ❏ ${prefix}afk
◪ *DEVELOPER  APBOT*
`
}
exports.help = help



  
