# -*- coding: utf-8 -*-

# excel to Json

EXCEL_PATH = "excel"
JSON_PATH = "json"



import os
import sys
import xlrd
import json
import io;

def changeToList(args):
	return args.split(";")

TYPE_FUNC = {
	"STR":str,
	"INT":int,
	"LIST":changeToList,

}



def change(path):
	
	for root, dirs, files in os.walk(path):  
		
		path  = os.path.join(os.getcwd() ,root)
		for fileName in files :
			if not fileName.endswith(".xlsx") or  fileName.startswith("~$"):
				continue
			filePath = os.path.join(path, fileName)
			data = changeOne(filePath)
			

			with io.open(JSON_PATH+  "/" + fileName.split(".")[0]+".json","w+",encoding="utf-8") as f:
				#json.dump(data,f,ensure_ascii=False,  indent = 4)

				my_json_str = json.dumps(data, ensure_ascii=False, indent =4)
				if isinstance(my_json_str, str):
					my_json_str = my_json_str.decode("utf-8")
				f.write(my_json_str)


def changeOne(filePath):
	data = xlrd.open_workbook(filePath)
	sheetDict ={}
	for sheetData in data.sheets():
		sheetName = sheetData.name
		rowCnt = sheetData.nrows;
		colCnt = sheetData.ncols
		dataDict = {}
		if rowCnt:
			strTypeList = sheetData.row_values(0); # 类型
			# 创建对应index 对应的类型方法
			typeDict = {}
			for index in range(len(strTypeList)):
				typeDict[index] = TYPE_FUNC[strTypeList[index]]

			keyList = sheetData.row_values(2); # key
			
			

			for  index in range(3, rowCnt):
				
				rowList = sheetData.row_values(index)
			
				for rowIndex in range(len(rowList)):
					result = rowList[rowIndex];
					if result:
						result = typeDict[rowIndex](result)
					else:
						result = None

					if rowIndex == 0: # 第一列肯定是扩充
						
						if not result in dataDict:
							dataDict[result] = {
								keyList[rowIndex]:result
							}
					else:

						keyName = keyList[rowIndex]

						_Index =keyName.find("_")

						if _Index == -1:
							# 检测后面是否需要构成子及
							isNeedSub = False
							for subIndex in range(rowIndex +1, len(rowList)):
								subName = keyList[subIndex]
								if subName.startswith(keyName):
									isNeedSub = True
									break
							if isNeedSub:
								try:
									result = float(result)
								except:
									pass
								try:
									result = int(result)
								except:
									pass
								
								if not result in dataDict:
									
									dataDict[result] = {
										keyName:result
									}

							else:
								dataDict[keyName]= result

						else:
							beforeKey = keyList.index(keyName[:_Index] )
							

							before = rowList[beforeKey]
							try:
								result = float(result)
							except:
								pass
									
							try:
								result = int(before)
							except:
								pass
							keyName = keyName[_Index+1:]
							dataDict[before][keyName] = result





			sheetDict[sheetName] = dataDict
		return sheetDict



				
class CStack:
	def __init__(self):
		self.mObjectList = [];
		self.mNowIndex = -1;
		
	def push(self, obj):
		self.mObjectList.append(obj)
		self.mNowIndex +=1

	def get(self):
		return self.mObjectList[self.mNowIndex]

	def pop(self):
		self.mObjectList.remove(self.mObjectList[self.mNowIndex])
		self.mNowIndex -=1

	def clear(self):
		self.mObjectList =[]
		self.mNowIndex = -1
		


change(EXCEL_PATH)