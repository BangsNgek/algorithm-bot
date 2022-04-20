let {		
	Presence,
	Mimetype, 
	waChatkey,
	ProxyAgent,	
	processTime,
	mentionedJid,
	MessageType, 
	WAzeeection,
	RezeeectMode,		
	MessageOptions, 
	GroupSettingChange, 	
	WALocationMessage, 
	WA_DEFAULT_EPHEMERAL, 
	WA_MESSAGE_STUB_TYPES, 
	} = require('@adiwajshing/baileys')
let SSH = require('simple-ssh')
let datetime = require('node-datetime')
let fs = require('fs')
let toMs = require('ms')
let hx = require('hxz-api')
let axios = require("axios")
let ms = require('parse-ms')
let crypto = require('crypto') 
let yts = require( 'yt-search')
let request = require('request')
let fetch = require('node-fetch')
let googleImage = require('g-i-s')
let ffmpeg = require('fluent-ffmpeg')
let brainly = require('brainly-scraper')
let { EmojiAPI } = require("emoji-api")
let emoji = new EmojiAPI()
let speed = require('performance-now')
let moment = require('moment-timezone')
let tamnel = fs.readFileSync('./media/Peler.png')
let { color, bgcolor } = require('./lib/color')

let _antilink = JSON.parse(fs.readFileSync('./lib/data/antilink.json'))
let { fetchJson, fetchText } = require('./lib/fetcher')
let { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, NumberRandom, createExif} = require('./lib/functions')
let p = '```'
publik = false
hit_today = [];
healtawal = 100
potionawal = 1
function tanggal(){
    myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum\'at','Sabtu'];
    var tgl = new Date();
    var day = tgl.getDate()
    bulan = tgl.getMonth()
    var thisDay = tgl.getDay(),
    thisDay = myDays[thisDay];
    var yy = tgl.getYear()
    var year = (yy < 1000) ? yy + 1900 : yy;
    return `${thisDay} ${day} ${myMonths[bulan]} ${year}`
} 
var runtime = function(seconds) {
    seconds = Number(seconds);
    var d = Math.floor(seconds / (3600 * 24));
    var h = Math.floor(seconds % (3600 * 24) / 3600);
    var m = Math.floor(seconds % 3600 / 60);
    var s = Math.floor(seconds % 60);
    var dDisplay = d > 0 ? d + (d == 1 ? " Hari, " : " Hari, ") : "";
    var hDisplay = h > 0 ? h + (h == 1 ? " Jam, " : " Jam, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " Menit, " : " Menit, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " Detik" : " Detik") : "";
    return dDisplay + hDisplay + mDisplay + sDisplay;
} 
function chatnya(){
}
module.exports = algorithm = async (algorithm, mek) => {
    try {
        if (!mek.hasNewMessage) return 
        mek = mek.messages.all()[0]
        if (!mek.message) return
        if (mek.key && mek.key.remoteJid == 'status@broadcast') return
        global.prefix
        global.blocked		
        mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const from = mek.key.remoteJid
        const type = Object.keys(mek.message)[0]
        const { text, extendedText, contact, contactsArray, groupInviteMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
        const wita = moment.tz('Asia/Makassar').format("HH:mm")
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[z?Ａ繩?繞?°?Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+@,;]/.test(cmd) ? cmd.match(/^[z?Ａ繩?繞??Ｔ瞼簧??=|~!#$%^&.?/\\穢^z+*,;]/gi) : '!'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''				
        budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
        bodi = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
        const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
        const timestamp = speed();
        const latensi = speed() - timestamp
        hit_today.push(command);
        const is = budy.slice(0).trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const isCmd = body.startsWith(prefix)
	    const botNumber = algorithm.user.jid
        const isGroup = from.endsWith('@g.us')
        const sender = mek.key.fromMe ? algorithm.user.jid : isGroup ? mek.participant : mek.key.remoteJid;
        const conts = mek.key.fromMe ? algorithm.user.jid : algorithm.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? algorithm.user.name : conts.notify || conts.vname || conts.name || 'Undefinied'

        const OwnerNumber = [`6283127956680@s.whatsapp.net`]
     	const isOwner = OwnerNumber.includes(sender)
	    const groupMetadata = isGroup ? await algorithm.groupMetadata(from) : ''
	    const groupName = isGroup ? groupMetadata.subject : ''
	    const groupMembers = isGroup ? groupMetadata.participants : ''
        const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
     	const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
     	const isGroupAdmins = groupAdmins.includes(sender) || false  
        const isAnti = isGroup ? _antilink.includes(from) : false
        
        
        mess = {
            limit: `Upss maaf kak ${pushname} limit kamu sudah habis`,
            wait: '```𝘛𝘶𝘯𝘨𝘨𝘶 𝘉𝘦𝘯𝘵𝘢𝘳𝘳...```',
            success: '```𝘚𝘶𝘤𝘤𝘦𝘴𝘴 𝘕i𝘩```',
            error: {
                stick: '```𝘚𝘵𝘪𝘤𝘬𝘦𝘳 𝘈𝘦 𝘟𝘰𝘯𝘵𝘰𝘭```',
                Iv: '```𝘓𝘪𝘯𝘬 𝘌𝘙𝘙𝘖𝘙 𝘉𝘳𝘶𝘩𝘩_-```',
            },
            only: {
                group: '```𝘒𝘩𝘶𝘴𝘶𝘴 𝘎𝘳𝘰𝘶𝘱 𝘉𝘳𝘰𝘰```',
                owner: 'Khusus Owner Ngab',
                admin: 'Khusus Admin!',
                prem: 'Khusus Member Premium:v',
                event: 'Event Belum Aktif Di Group ini!!',
                bot: 'Mohon jadikan BOT Admin Group!',	    
                player: `Maaff kak ${pushname} sepertinya kakak bukan petualang!!\nUntuk menjadi petualang silahkan ketik :\n${prefix}joinrpg`,	           
            }
        } 
        function monospace(string) {
            return '```' + string + '```'
        } 
        const sendKontak = (from, nomor, nama, org = "") => {
            const vcard =
            "BEGIN:VCARD\n" +
            "VERSION:3.0\n" +
            "FN:" + nama + "\n" +
            "ORG:" + org + "\n" +
            "item1.TEL;type=CELL;type=VOICE;waid=" + nomor +":+" + nomor + "\n" +
            "item1.X-ABLabel:👑 Creator\n" +
            "item2.EMAIL;type=INTERNET:bangsngek@gmail.com\n" +
            "item2.X-ABLabel:📧 Email\n" +
            "item3.URL:https://youtube.com/c/BloodAndRoses\n" +
            "item3.X-ABLabel:⚙️ Channel YT BangsNgek\n" +
            "item4.ADR:;;🇮🇩 Indonesia;;;;\n" +
            "item4.X-ABADR:ac\n" +
            "item4.X-ABLabel:🌍 Region\n" +
            "item5.X-ABLabel:⚔️ Bangs Ngekm\n" +
            "END:VCARD";
            algorithm.sendMessage(from,{ displayname: nama, vcard: vcard },MessageType.contact,{ quoted: mek });
        }; 
        const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
            contentText: context,
            footerText: fortext,
            buttons: but,
            headerType: 1
            }
            algorithm.sendMessage(from, buttonMessages, buttonsMessage, {quoted: mek})
        }
        const reply = (teks) => {
            algorithm.sendMessage(from, teks, text, {quoted:mek})
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? algorithm.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : algorithm.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
        }
        const sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await algorithm.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            algorithm.sendMessage(from, buttonMessagesI, buttonsMessage, {quoted: mek})
        }

        const linkwa = 'https://chat.whatsapp.com/'
		if (budy.includes(`${linkwa}`)){
            if (!isGroup) return
            if (!isAnti) return
            if (!isBotGroupAdmins) return reply('Untung Gue bukan admin, kalo iya gua kick lu')
            linkgc = await algorithm.groupInviteCode (from)
            if (budy.includes(`${linkwa}${linkgc}`)) return reply('Untung Link group ini')
            if (isGroupAdmins) return reply(`Hmm mantap min`)
            zee.updatePresence(from, Presence.composing)
            var Kick = `${sender.split("@")[0]}@s.whatsapp.net`
            setTimeout( () => {
                reply('byee')
            }, 1100)
            setTimeout( () => {
                zee.groupRemove(from, [Kick]).catch((e) => {console.log(`*ERROR:* ${e}`)}) 
            }, 1000)
            setTimeout( () => {
                reply(`Antilink menyala & link Group Terdeteksi maaf *${pushname}* anda akan di kick`)
            }, 0)
     	}
        const pengaturan = (pesan) => {
            but = [{ buttonId: `${prefix}antilink on`, buttonText: { displayText: 'ON✔️' }, type: 1 }, { buttonId: `${prefix}antilink off`, buttonText: { displayText: 'OFF✖️' }, type: 1 }]
            sendButImage(from, pesan,`${p}${wita} || ${tanggal()}${p}`, tamnel,but)
        }
        switch(is){
            //Kosongin ga perlu pake ini ya kmak:V
        }
        switch(command){
            case 'menu':
                menu =`# Hallo ${pushname}
• Nama Owner : Bangs Ngek
• Nama Bot : Bangs Ngek BOT
• Runtime : ${runtime(process.uptime())}
• Browser : ${algorithm.browserDescription[1]}
• Server : ${algorithm.browserDescription[0]}
• Version : ${algorithm.browserDescription[2]}
• Speed :  ${latensi.toFixed(4)} Second
• Versi Whatsapp : ${algorithm.user.phone.wa_version}`
                but = [{ buttonId: `${prefix}allmenu`, buttonText: { displayText: 'MENU' }, type: 1 }, 
                    { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }]
                sendButImage(from, monospace(menu),`${p}${wita} || ${tanggal()}${p}`, tamnel,but)  
            break
            case 'allmenu':
                cok = algorithm.prepareMessageFromContent(from,{
                    "listMessage": {
                        "title": '◩ Bot Info',
                        "description": `Bot ini sangat berguna untuk menjaga rules group.`,
                        "buttonText": "PILIH DISINI",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "title": `${wita} - ${tanggal()}`,
                                "rows": [
                                    {
                                        "title": "▶ Tag All (Only Group + Admin Group)",
                                        "rowId": `${prefix}tagall`
                                    },
                                    {
                                        "title": "▶ Hide Tag (Only Group + Admin Group)",
                                        "rowId": `${prefix}hidetag`
                                    },
                                    {
                                        "title": "▶ Anti Link (Only Group + BOT Admin)",
                                        "rowId": `${prefix}antilink`
                                    },
                                    {
                                        "title": "▶ Open Group (Only Group + BOT Admin)",
                                        "rowId": `${prefix}opengc`
                                    },
                                    {
                                        "title": "▶ Close Group (Only Group + BOT Admin)",
                                        "rowId": `${prefix}closegc`
                                    },
                                    {
                                        "title": "▶ Change Description (Only Group + BOT Admin)",
                                        "rowId": `${prefix}setdesc`
                                    },
                                    {
                                        "title": "▶ Add Member (Only Group + BOT Admin)",
                                        "rowId": `${prefix}add`
                                    },
                                    {
                                        "title": "▶ Kick Member (Only Group + BOT Admin)",
                                        "rowId": `${prefix}kick`
                                    },
                                    {
                                        "title": "▶ Promote Admin (Only Group + BOT Admin)",
                                        "rowId": `${prefix}promote`
                                    },
                                    {
                                        "title": "▶ Demote Admin (Only Group + BOT Admin)",
                                        "rowId": `${prefix}demote`
                                    },
                                    {
                                        "title": "▶ Link Group (Only Group + BOT Admin)",
                                        "rowId": `${prefix}linkgc`
                                    },
                                    {
                                        "title": "▶ Screenshoot Website",
                                        "rowId": `${prefix}ssweb`
                                    },
                                ]
                            }
                        ]
                    }
                }, {quoted: mek});
                algorithm.relayWAMessage(cok)
            break
            case 'owner':
                sendKontak(from, `6283127956680`, `Bangs Ngek`)
            break
            case 'antilink':
                if (!isGroup) return reply(mess.only.group)
                if (!isGroupAdmins && !isOwner) return reply('Lu bkn admin')
                if (!isBotGroupAdmins) return reply('Bot Harus Admin')
                if (args.length < 1) return pengaturan(`*Silahkan pilih perintahnya!*`)
                if ((args[0]) === 'on') {
                    if (isAnti) return reply('Antilink aktif')
                    _antilink.push(from)
                    fs.writeFileSync('./lib/data/antilink.json', JSON.stringify(_antilink))
                    reply(`Mengaktifkan fitur anti link di group *${groupMetadata.subject}*`)
                } else if ((args[0]) === 'off') {
                    if (!isAnti) return reply('Antilink off')
                    _antilink.splice(from, 1)
                    fs.writeFileSync('./lib/data/antilink.json', JSON.stringify(_antilink))
                    reply(`Menonaktifkan fitur anti link di group *${groupMetadata.subject}*`)
                } else {
                    pengaturan('*Silahkan pilih perintahnya!*')
                }
            break
            case 'tagall':
                if (!isGroup) return reply(mess.only.group)
                if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
                members_id = []
                teks = `🎌 Group : *${groupName}*\n💫 Jumlah member : *${groupMetadata.participants.length}*\n\n┌───⊷ *TAG ALL* ⊶\n`
                for (let mem of groupMembers) {
                    teks += `├> @${mem.jid.split('@')[0]}\n`
                    members_id.push(mem.jid)
                }
                teks += `└──────────────`
                mentions(teks, members_id, true)
            break
            case 'hidetag':
                if (!isGroup) return reply(mess.only.group)
                if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
                var value = args.join(' ')
                var group = await algorithm.groupMetadata(from)
                var member = group['participants']
                var mem = []
                member.map(async adm => {
                mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
                })
                var optionshidetag = {
                text: value,
                contextInfo: { mentionedJid: mem },
                quoted: mek
                }
                algorithm.sendMessage(from, optionshidetag, text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "393470602054-1351628616@g.us" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption":'#IZIN NGETAG',"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": tamnel} }  } })
            break
            case 'opengc':
                if (!isGroup) return reply(mess.only.group)
                if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
                if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
                reply(`Sukses Membuka Grup ${groupName}`)
                algorithm.groupSettingChange(from, GroupSettingChange.messageSend, false)
            break
            case 'closegc':
                if (!isGroup) return reply(mess.only.group)
                if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
                if (!isBotGroupAdmins) return reply(`Bot Bukan Admin`)
                reply(`Sukses Menutup Grup ${groupName}`)
                algorithm.groupSettingChange(from, GroupSettingChange.messageSend, true)
            break
            case 'setdesc':
                if (!isGroup) return reply(mess.only.group)
                if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
                if (!isBotGroupAdmins) return reply(`Bot Harus Admin!`)
                if (args.length < 1) return reply(`Ketik *${prefix}setdesc TeksDeskripsiBaru*`)
                teks = body.slice(9)
                algorithm.groupUpdateDescription(from, teks)
            break
            case 'add':
                if (args.length < 1) return reply('Yang mau di add jin ya?')
                if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
                try {
                    num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
                    algorithm.groupAdd(from, [num])
                } catch (e) {
                    console.log('Error :', e)
                    reply('Gagal menambahkan target, mungkin karena di private')
                }
            break
            case 'kick':
                if (!isGroup) return reply(mess.only.group)
                if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
                if (!isBotGroupAdmins) return reply(`bot harus admin`)
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 ??𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                    teks = ''
                    for (let _ of mentioned) {
                        teks += `asek dapat makanan,otw mengkickmu, 🏃sksks :\n`
                        teks += `@_.split('@')[0]`
                    }
                    mentions(teks, mentioned, true)
                    algorithm.groupRemove(from, mentioned)
                } else {
                    mentions(`asek dapat makanan,otw mengkickmu, @${mentioned[0].split('@')[0]} 🏃`, mentioned, true)
                    algorithm.groupRemove(from, mentioned)
                }
            break
            case 'demote':
                if (!isGroup) return reply(mess.only.group)
                if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
                if (!isBotGroupAdmins) return reply(mess.only.bot)
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                    teks = ''
                    for (let _ of mentioned) {
                        teks += `Status adminmu dicopot. Makanya jan jadi sider🏃 :\n`
                        teks += `@_.split('@')[0]`
                    }
                    mentions(teks, mentioned, true)
                    algorithm.groupDemoteAdmin(from, mentioned)
                } else {
                    mentions(`YA HAHAHA  WAHYU @${mentioned[0].split('@')[0]} Jabatan adminmu di copt, Makanya jan jadi sider🏃`, mentioned, true)
                    algorithm.groupDemoteAdmin(from, mentioned)
                }
            break
            case 'promote':
                if (!isGroup) return reply(mess.only.group)
                if (!isOwner && !isGroupAdmins) return reply(mess.only.admin)
                if (!isBotGroupAdmins) return reply(mess.only.bot)
                if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('𝗧𝗮𝗴 𝘁𝗮𝗿𝗴𝗲𝘁 𝘆𝗮𝗻𝗴 𝗶𝗻𝗴𝗶𝗻 𝗱𝗶 𝘁𝗲𝗻𝗱𝗮𝗻𝗴!')
                mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                if (mentioned.length > 1) {
                    teks = ''
                    for (let _ of mentioned) {
                        teks += `Selamat🥳 anda naik menjadi admin grub (+_+) :\n`
                        teks += `@_.split('@')[0]`
                    }
                    mentions(teks, mentioned, true)
                    algorithm.groupMakeAdmin(from, mentioned)
                } else {
                    mentions(`selamat🥳 @${mentioned[0].split('@')[0]} anda naik menjadi admin grub (+_+)`, mentioned, true)
                    algorithm.groupMakeAdmin(from, mentioned)
                }
            break
            case 'linkgc': case 'link':
            case 'linkgroup':
                linkgc = await algorithm.groupInviteCode(from)
                reply('https://chat.whatsapp.com/'+linkgc)  
            break
            case 'delete':
                if (!isGroup)return reply(mess.only.group)
                try {
                    algorithm.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
                } catch (e) {
                    reply('Hanya bisa menghapus pesan dariku')
                }
            break
            case 'ssweb':
                if (isLimit(sender, isPremium, isOwner, limitCount, limit)) return reply(mess.limit)
                if (args.length < 1) return reply('Urlnya mana kak..')
                anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${v}`)
                buff = await getBuffer(anu.screenshot)
                algorithm.sendMessage(from, buff, image, {quoted: mek, caption : v})
                limitAdd(sender, limit)
            default:
                // if (isCmd) {      
                //     menu = monospace(`Maaf jing! ${pushname}_<\nCommand ${command} Tidak tersedia di list menu!!\nMohon cek kembali list menu kimak!`)
                //     but = [{ buttonId: `!menu`, buttonText: { displayText: 'MENU' }, type: 1 }]
                //     sendButton(from, menu, 'Created By Algorithm', but, mek)
                //     break
                // }
                // if(Menit == '57'){
                //     reply('Halo')
                // }

                if (budy.startsWith('>')) {
                    console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        reply(`${evaled}`)
                    } catch (err) {
                        reply(`${err}`)
                    }
                } else if (budy.startsWith('x')) {
                    console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
                    try {
                        return algorithm.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: mek })
                    } catch (err) {
                        e = String(err)
                        reply(e)
                    }
                }
        }
    }catch(e){
        e = String(e)
        if (!e.includes("this.isZero") && !e.includes("jid")) {
            console.log('Error : %s', color(e, 'red'))
        }
    }
}