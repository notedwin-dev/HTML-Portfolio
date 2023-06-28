export default function songlist() {
    let sadSongs = [
        "其实", "不爱我", "把你揉碎捏成苹果", ""
    ]

    let loveSongs = [
        "像风一样", "Until I Found You", "天外来物", "好喜欢你", "女孩", "宝贝在干嘛", "初恋[声生不息]"
    ]

    return (
        <main>
            <section>
                <h1>憨憨温 · 抒情 [LOVE]</h1>
                <div id="loveSongName">{loveSongs}</div>

            </section>
            <section>
                <h1>憨憨温 · 饶舌 [RAP]</h1>
                <div id="rapSongName">e</div>


            </section>
            <section >
                <h1>憨憨温 · 悲歌 [SAD]</h1>
                <div>{sadSongs}</div>
            </section>

            <section>
                <h1>憨憨温 · 嗨歌 [CLUB]</h1>
                <div id="sadSongName">e</div>
            </section>
        </main>
    )
}
