// 静岡県35市町データ
const SHIZUOKA_DATA = [
    { municipality: "静岡市", total_pop: 693389, elderly_ratio: 0.3023, single_ratio: 0.3500, lng: 138.383, lat: 34.975 },
    { municipality: "浜松市", total_pop: 790718, elderly_ratio: 0.2794, single_ratio: 0.3200, lng: 137.726, lat: 34.710 },
    { municipality: "沼津市", total_pop: 189386, elderly_ratio: 0.3194, single_ratio: 0.3627, lng: 138.863, lat: 35.100 },
    { municipality: "熱海市", total_pop: 34208, elderly_ratio: 0.4787, single_ratio: 0.5106, lng: 139.072, lat: 35.096 },
    { municipality: "三島市", total_pop: 107783, elderly_ratio: 0.2939, single_ratio: 0.3328, lng: 138.918, lat: 35.118 },
    { municipality: "富士宮市", total_pop: 128105, elderly_ratio: 0.2960, single_ratio: 0.2951, lng: 138.613, lat: 35.223 },
    { municipality: "伊東市", total_pop: 65491, elderly_ratio: 0.4270, single_ratio: 0.3701, lng: 139.091, lat: 34.965 },
    { municipality: "島田市", total_pop: 95719, elderly_ratio: 0.3153, single_ratio: 0.2460, lng: 138.175, lat: 34.838 },
    { municipality: "富士市", total_pop: 245392, elderly_ratio: 0.2825, single_ratio: 0.2894, lng: 138.676, lat: 35.161 },
    { municipality: "磐田市", total_pop: 166672, elderly_ratio: 0.2855, single_ratio: 0.2952, lng: 137.852, lat: 34.711 },
    { municipality: "焼津市", total_pop: 136845, elderly_ratio: 0.2986, single_ratio: 0.2780, lng: 138.318, lat: 34.870 },
    { municipality: "掛川市", total_pop: 114954, elderly_ratio: 0.2787, single_ratio: 0.2814, lng: 138.015, lat: 34.770 },
    { municipality: "藤枝市", total_pop: 141342, elderly_ratio: 0.3014, single_ratio: 0.2494, lng: 138.257, lat: 34.869 },
    { municipality: "御殿場市", total_pop: 86614, elderly_ratio: 0.2560, single_ratio: 0.3252, lng: 138.934, lat: 35.309 },
    { municipality: "袋井市", total_pop: 87864, elderly_ratio: 0.2425, single_ratio: 0.3046, lng: 137.926, lat: 34.748 },
    { municipality: "下田市", total_pop: 20183, elderly_ratio: 0.4229, single_ratio: 0.3914, lng: 138.945, lat: 34.679 },
    { municipality: "裾野市", total_pop: 50911, elderly_ratio: 0.2684, single_ratio: 0.3261, lng: 138.911, lat: 35.174 },
    { municipality: "湖西市", total_pop: 57885, elderly_ratio: 0.2776, single_ratio: 0.3005, lng: 137.533, lat: 34.724 },
    { municipality: "伊豆市", total_pop: 28190, elderly_ratio: 0.4256, single_ratio: 0.2903, lng: 138.905, lat: 34.976 },
    { municipality: "御前崎市", total_pop: 31103, elderly_ratio: 0.3066, single_ratio: 0.2849, lng: 138.128, lat: 34.638 },
    { municipality: "菊川市", total_pop: 47789, elderly_ratio: 0.2692, single_ratio: 0.2839, lng: 138.086, lat: 34.761 },
    { municipality: "伊豆の国市", total_pop: 46804, elderly_ratio: 0.3365, single_ratio: 0.3065, lng: 138.944, lat: 35.034 },
    { municipality: "牧之原市", total_pop: 43502, elderly_ratio: 0.3180, single_ratio: 0.2626, lng: 138.222, lat: 34.740 },
    { municipality: "東伊豆町", total_pop: 11488, elderly_ratio: 0.4802, single_ratio: 0.4191, lng: 139.041, lat: 34.821 },
    { municipality: "河津町", total_pop: 6870, elderly_ratio: 0.4309, single_ratio: 0.3297, lng: 138.986, lat: 34.757 },
    { municipality: "南伊豆町", total_pop: 7877, elderly_ratio: 0.4917, single_ratio: 0.3280, lng: 138.865, lat: 34.654 },
    { municipality: "松崎町", total_pop: 6038, elderly_ratio: 0.4882, single_ratio: 0.3195, lng: 138.777, lat: 34.755 },
    { municipality: "西伊豆町", total_pop: 7090, elderly_ratio: 0.5154, single_ratio: 0.3789, lng: 138.773, lat: 34.829 },
    { municipality: "函南町", total_pop: 36794, elderly_ratio: 0.3280, single_ratio: 0.2704, lng: 138.995, lat: 35.143 },
    { municipality: "清水町", total_pop: 31710, elderly_ratio: 0.2613, single_ratio: 0.3104, lng: 138.904, lat: 35.097 },
    { municipality: "長泉町", total_pop: 43336, elderly_ratio: 0.2205, single_ratio: 0.3089, lng: 138.897, lat: 35.149 },
    { municipality: "小山町", total_pop: 18568, elderly_ratio: 0.2999, single_ratio: 0.2835, lng: 138.997, lat: 35.360 },
    { municipality: "吉田町", total_pop: 28919, elderly_ratio: 0.2582, single_ratio: 0.3135, lng: 138.251, lat: 34.775 },
    { municipality: "川根本町", total_pop: 6206, elderly_ratio: 0.4956, single_ratio: 0.3241, lng: 138.140, lat: 35.083 },
    { municipality: "森町", total_pop: 17457, elderly_ratio: 0.3438, single_ratio: 0.2367, lng: 137.930, lat: 34.834 }
];

// 静岡県の精密輪郭（確実なSVG外枠パス描画用）
const SHIZUOKA_CONTOUR = [
    [137.49, 34.68], [137.58, 34.68], [137.75, 34.66], [137.92, 34.64], [138.08, 34.61], [138.14, 34.59], // 御前崎
    [138.22, 34.66], [138.28, 34.76], [138.33, 34.86], [138.36, 34.92], [138.50, 35.01], [138.58, 35.12], // 駿河湾奥
    [138.86, 35.08], [138.87, 34.98], [138.80, 34.88], [138.76, 34.78], [138.78, 34.66], [138.84, 34.60], // 石廊崎
    [138.95, 34.67], [139.04, 34.78], [139.11, 34.90], [139.13, 34.98], [139.09, 35.06], [139.08, 35.13], // 熱海
    [139.01, 35.25], [138.98, 35.34], [138.85, 35.38], [138.68, 35.38], [138.52, 35.40], [138.38, 35.43], // 富士山北
    [138.26, 35.61], [138.18, 35.62], [138.08, 35.44], [137.98, 35.32], [137.82, 35.20], [137.70, 35.05], // 南ア・天竜
    [137.56, 34.88], [137.50, 34.78], [137.49, 34.68]
];

// エリア定義
const REGIONS = {
    WEST: {
        name: '西部',
        color: '#3498db',
        cities: ['浜松市', '磐田市', '掛川市', '袋井市', '湖西市', '御前崎市', '菊川市', '森町']
    },
    MID: {
        name: '中部',
        color: '#2ecc71',
        cities: ['静岡市', '島田市', '焼津市', '藤枝市', '牧之原市', '吉田町', '川根本町']
    },
    IZU_EAST: {
        name: '伊豆・東部',
        color: '#e74c3c',
        cities: ['熱海市', '下田市', '伊東市', '沼津市', '三島市', '東伊豆町', '河津町', '南伊豆町', '松崎町', '西伊豆町', '伊豆市', '伊豆の国市', '函南町', '清水町', '長泉町', '小山町', '御殿場市', '裾野市', '富士市', '富士宮市']
    }
};

const tooltip = d3.select("#tooltip");

function getRegion(municipality) {
    if (REGIONS.WEST.cities.includes(municipality)) return REGIONS.WEST;
    if (REGIONS.MID.cities.includes(municipality)) return REGIONS.MID;
    return REGIONS.IZU_EAST;
}

// 起動
document.addEventListener("DOMContentLoaded", () => {
    SHIZUOKA_DATA.forEach(d => {
        d.region = getRegion(d.municipality);
    });

    // GeoJSONがあれば読み込み、なければ内蔵の輪郭パスで描画
    d3.json("shizuoka.geojson")
        .then(geoData => {
            drawMapWithGeoJSON(geoData, SHIZUOKA_DATA);
        })
        .catch(() => {
            drawMapFallback(SHIZUOKA_DATA);
        });

    switchGraphMode('3d');
});

// ツールチップ
function showTooltip(event, d) {
    tooltip.style("display", "block")
        .html(`
            <div class="tooltip-title">
                ${d.municipality}
                <span class="tooltip-badge" style="background:${d.region.color}; color:#fff;">${d.region.name}</span>
            </div>
            <div>総人口: <strong>${d.total_pop.toLocaleString()}</strong> 人</div>
            <div>高齢化率: <strong>${(d.elderly_ratio * 100).toFixed(1)}%</strong></div>
            <div>単独世帯割合: <strong>${(d.single_ratio * 100).toFixed(1)}%</strong></div>
        `);
    moveTooltip(event);
}

function moveTooltip(event) {
    tooltip.style("left", (event.pageX + 15) + "px")
           .style("top", (event.pageY - 20) + "px");
}

function hideTooltip() {
    tooltip.style("display", "none");
}

// ==========================================
// 左画面：地図描画（GeoJSONがある場合）
// ==========================================
function drawMapWithGeoJSON(geoData, data) {
    const width = 540, height = 460;
    const svg = d3.select("#map-chart");
    svg.selectAll("*").remove();

    const projection = d3.geoMercator()
        .center([138.35, 34.98])
        .scale(16500)
        .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection);
    const dataMap = new Map(data.map(d => [d.municipality, d]));

    // 市町村ポリゴン
    svg.append("g")
        .selectAll("path")
        .data(geoData.features)
        .join("path")
        .attr("class", "geo-geojson-path")
        .attr("d", path)
        .attr("fill", d => {
            const name = (d.properties.N03_004 || d.properties.name || "").trim();
            const city = dataMap.get(name);
            return city ? city.region.color : "#cbd5e1";
        })
        .attr("opacity", 0.75)
        .on("mouseover", (event, d) => {
            const name = (d.properties.N03_004 || d.properties.name || "").trim();
            const city = dataMap.get(name);
            if (city) showTooltip(event, city);
        })
        .on("mousemove", moveTooltip)
        .on("mouseout", hideTooltip);

    drawMapCommonLabels(svg, width);
}

// ==========================================
// 左画面：地図描画（内蔵輪郭フォールバック）
// ==========================================
function drawMapFallback(data) {
    const width = 540, height = 460;
    const svg = d3.select("#map-chart");
    svg.selectAll("*").remove();

    const projection = d3.geoMercator()
        .center([138.35, 34.98])
        .scale(16500)
        .translate([width / 2, height / 2]);

    // 静岡県輪郭線のSVG Path生成
    const contourPoints = SHIZUOKA_CONTOUR.map(coord => projection(coord));
    const lineGenerator = d3.line().curve(d3.curveCardinalClosed.tension(0.4));
    const dPath = lineGenerator(contourPoints);

    // 静岡県本土枠組み
    svg.append("path")
        .attr("d", dPath)
        .attr("class", "prefecture-land");

    // バブル描画
    const radiusScale = d3.scaleSqrt()
        .domain([d3.min(data, d => d.total_pop), d3.max(data, d => d.total_pop)])
        .range([6, 22]);

    const cityGroup = svg.append("g").attr("class", "cities-layer")
        .selectAll("g")
        .data(data)
        .join("g")
        .attr("transform", d => {
            const coords = projection([d.lng, d.lat]);
            return `translate(${coords[0]}, ${coords[1]})`;
        });

    cityGroup.append("circle")
        .attr("class", "map-city-circle")
        .attr("id", d => `map-circle-${d.municipality}`)
        .attr("r", d => radiusScale(d.total_pop))
        .attr("fill", d => d.region.color)
        .attr("stroke", "#ffffff")
        .attr("stroke-width", 1.5)
        .attr("opacity", 0.9)
        .on("mouseover", (event, d) => {
            d3.select(event.currentTarget).classed("highlighted", true);
            showTooltip(event, d);
        })
        .on("mousemove", moveTooltip)
        .on("mouseout", (event) => {
            d3.select(event.currentTarget).classed("highlighted", false);
            hideTooltip();
        });

    // 主要都市名のみ小さく表示
    cityGroup.append("text")
        .attr("class", "city-label")
        .attr("text-anchor", "middle")
        .attr("dy", d => radiusScale(d.total_pop) > 13 ? "0.35em" : "-0.7em")
        .attr("fill", d => radiusScale(d.total_pop) > 13 ? "#ffffff" : "#1e293b")
        .attr("font-size", "10px")
        .text(d => ['静岡市', '浜松市', '沼津市', '熱海市', '富士市'].includes(d.municipality) ? d.municipality.replace(/(市|町)$/, '') : '');

    drawMapCommonLabels(svg, width);
}

function drawMapCommonLabels(svg, width) {
    const guides = svg.append("g");
    guides.append("text").attr("x", 295).attr("y", 370).attr("class", "geo-label").text("駿河湾");
    guides.append("text").attr("x", 120).attr("y", 430).attr("class", "geo-label").text("遠州灘");
    guides.append("text").attr("x", 480).attr("y", 350).attr("class", "geo-label").text("相模湾");
    guides.append("text").attr("x", width - 20).attr("y", 35)
        .attr("text-anchor", "end")
        .attr("fill", "#e11d48")
        .attr("font-size", "12px")
        .attr("font-weight", "bold")
        .text("東京・首都圏方面 →");
}

// ==========================================
// 右画面：3D / 2D 散布図（円のみ・ホバー表示）
// ==========================================
function switchGraphMode(mode) {
    document.querySelectorAll('.view-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }

    const tip = document.getElementById('graph-tip');
    const regionKeys = ['IZU_EAST', 'MID', 'WEST'];

    if (mode === '3d') {
        tip.textContent = 'ドラッグ回転 / スクロール拡大（点ホバーで詳細）';
        const traces = regionKeys.map(key => {
            const region = REGIONS[key];
            const group = SHIZUOKA_DATA.filter(d => region.cities.includes(d.municipality));

            return {
                name: region.name,
                x: group.map(d => d.total_pop),
                y: group.map(d => d.elderly_ratio * 100),
                z: group.map(d => d.single_ratio * 100),
                text: group.map(d => d.municipality),
                mode: 'markers', // 円のみ
                type: 'scatter3d',
                hovertemplate: 
                    '<b>%{text}</b><br>' +
                    '総人口: %{x:,}人<br>' +
                    '高齢化率: %{y:.1f}%<br>' +
                    '単独世帯率: %{z:.1f}%<extra></extra>',
                marker: {
                    size: group.map(d => Math.max(5, Math.min(12, Math.sqrt(d.total_pop) / 80))),
                    color: region.color,
                    opacity: 0.88,
                    line: { width: 1, color: '#ffffff' }
                }
            };
        });

        const layout = {
            margin: { l: 0, r: 0, b: 0, t: 10 },
            paper_bgcolor: 'rgba(0,0,0,0)',
            legend: { orientation: 'h', y: 1.08, x: 0.05 },
            scene: {
                xaxis: { title: '総人口 (人)', gridcolor: '#e2e8f0' },
                yaxis: { title: '高齢化率 (%)', gridcolor: '#e2e8f0' },
                zaxis: { title: '単独世帯割合 (%)', gridcolor: '#e2e8f0' },
                camera: { eye: { x: 1.55, y: 1.55, z: 1.15 } }
            }
        };

        Plotly.newPlot('scatter-chart', traces, layout, { responsive: true, displayModeBar: false });

    } else {
        // 2D 散布図モード（円のみ）
        tip.textContent = '点にカーソルを合わせると自治体名が表示されます';
        let xField, yField, xLabel, yLabel;

        if (mode === 'elderly_single') {
            xField = d => d.elderly_ratio * 100;
            yField = d => d.single_ratio * 100;
            xLabel = '高齢化率 (%)';
            yLabel = '単独世帯割合 (%)';
        } else if (mode === 'pop_elderly') {
            xField = d => d.total_pop;
            yField = d => d.elderly_ratio * 100;
            xLabel = '総人口 (人)';
            yLabel = '高齢化率 (%)';
        } else if (mode === 'pop_single') {
            xField = d => d.total_pop;
            yField = d => d.single_ratio * 100;
            xLabel = '総人口 (人)';
            yLabel = '単独世帯割合 (%)';
        }

        const traces = regionKeys.map(key => {
            const region = REGIONS[key];
            const group = SHIZUOKA_DATA.filter(d => region.cities.includes(d.municipality));

            return {
                name: region.name,
                x: group.map(xField),
                y: group.map(yField),
                text: group.map(d => d.municipality),
                mode: 'markers', // 円のみにして文字重なりを解消
                type: 'scatter',
                hovertemplate: 
                    '<b>%{text}</b><br>' +
                    `${xLabel}: %{x:.1f}<br>` +
                    `${yLabel}: %{y:.1f}<extra></extra>`,
                marker: {
                    size: group.map(d => Math.max(8, Math.min(22, Math.sqrt(d.total_pop) / 45))),
                    color: region.color,
                    opacity: 0.85,
                    line: { width: 1.5, color: '#ffffff' }
                }
            };
        });

        const layout = {
            margin: { l: 50, r: 20, b: 50, t: 30 },
            paper_bgcolor: 'rgba(0,0,0,0)',
            plot_bgcolor: '#f8fafc',
            legend: { orientation: 'h', y: 1.12, x: 0.1 },
            xaxis: {
                title: { text: xLabel, font: { size: 12, color: '#334155' } },
                gridcolor: '#e2e8f0',
                zerolinecolor: '#cbd5e1'
            },
            yaxis: {
                title: { text: yLabel, font: { size: 12, color: '#334155' } },
                gridcolor: '#e2e8f0',
                zerolinecolor: '#cbd5e1'
            },
            hovermode: 'closest'
        };

        Plotly.newPlot('scatter-chart', traces, layout, { responsive: true, displayModeBar: false });
    }
}