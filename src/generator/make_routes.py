"""
根据pages文件夹内的文件一键自动生成路由导入与routes变量
前提1：router.js与pages文件夹在同一目录下
"""
import os
import re
os.chdir("..")
TARGET_FOLDER = "pages"

class Item:
    import_name: str
    component: str
    path: str

    def __init__(self, import_name, component, path):
        self.import_name = import_name
        self.component = component
        self.path = path


class RouteModel:
    """
    路由路径对应唯一组件
    组件名对应唯一组件路径
    """
    def __init__(self):
        self.model = []

    def append(self, item: Item):
        self.model.append(item)

    def makeRoutes(self) -> str:
        """
        to js routes assignment statement
        contains prefix, suffix, separator and item
        :return:
        example:
        import DraggableDemo from "./views/draggable/DraggableDemo.vue";
        import DraggableHandle from "./views/draggable/DraggableHandle.vue";

        const routes = [
            { path: '/draggable/DraggableDemo', component: DraggableDemo },
            { path: '/draggable/DraggableHandle', component: DraggableHandle },
        ]
        """
        prefix = "const routes = [\n\t"
        suffix = ",\n]"
        separator = ",\n\t"

        def item_to_string(item: Item):
            return rf"{{path: '{item.path}', component: {item.component}}}"
        items = list(map(item_to_string, self.model))
        return prefix + separator.join(items) + suffix

    def makeImports(self):
        separator = "\n"
        def item_to_string(item: Item):

            return rf'import {item.component} from "{item.import_name}";'

        items = list(map(item_to_string, self.model))
        return separator.join(items)


if __name__ == '__main__':
    routeModel = RouteModel()
    for root, dirs, files in os.walk(TARGET_FOLDER):
        for file in files:
            print(root, dirs, file)
            raw_path = os.path.join(root, file)  # e.g "views\draggable\DraggableDemo.vue"
            temp_path = raw_path.replace('\\', '/')  # e.g "views/draggable/DraggableDemo.vue"

            import_name = './' + temp_path  # e.g "./views/draggable/DraggableDemo.vue"
            temp_path = re.sub(r"^[^/]+", '', temp_path, count=1)  # e.g "/draggable/DraggableDemo.vue"
            component = re.match(r"(.+)\.vue", file).group(1)  # e.g "DraggableDemo.vue"
            path = re.match(r"(.+)\.vue", temp_path).group(1)  # e.g "/draggable/DraggableDemo"
            # 使用路径
            # print(import_name, component, path)
            routeModel.append(Item(import_name, component, path))
    # print(routeModel.makeImports())
    # print()
    # print(routeModel.makeRoutes())
    os.chdir("generator")
    with open("routes.ts",'w') as file:
        file.write(routeModel.makeImports()+'\n\n'+routeModel.makeRoutes())
