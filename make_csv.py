import pandas as pd

# 1. そのまま入れたエクセルをPythonが読み込む
df = pd.read_excel('SSDSE-A-2026.xlsx', sheet_name='SSDSE-A-2026')
df_data = df.iloc[2:].copy()
shizuoka = df_data[df_data['Prefecture'] == '静岡県'].copy()

# 2. 静岡県のデータだけを抽出する
data_list = []
for idx, row in shizuoka.iterrows():
    data_list.append({
        'municipality': row['Municipality'],
        'total_pop': float(row['A1101']),
        'total_households': float(row['A710101']),
        'single_households': float(row['A810105']),
        'elderly_65': float(row['A1303']),
        'elderly_75': float(row['A1419']),
        'single_ratio': float(row['A810105']) / float(row['A710101']),
        'elderly_ratio': float(row['A1303']) / float(row['A1101'])
    })

# 3. 新しいCSVファイルとして保存する
df_out = pd.DataFrame(data_list)
df_out.to_csv('shizuoka_shichoson_data.csv', index=False, encoding='utf-8-sig')
print("大成功！CSVファイルが作られました！")