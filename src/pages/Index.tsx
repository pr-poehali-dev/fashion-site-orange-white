
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import Icon from "@/components/ui/Icon";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const FadeIn = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
  >
    {children}
  </motion.div>
);

const Index: React.FC = () => {
  return (
    <div className="bg-white text-foreground">
      {/* Навигация */}
      <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-sm px-6 lg:px-10 py-4 border-b border-secondary">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-display font-semibold tracking-tighter">ORANGÉ</h1>
          </div>
          
          <div className="hidden md:flex space-x-8 font-medium">
            <a href="#collection" className="hover:text-primary transition-colors">Коллекция</a>
            <a href="#features" className="hover:text-primary transition-colors">О бренде</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Icon name="Search" />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="ShoppingBag" />
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon name="Menu" />
            </Button>
          </div>
        </div>
      </nav>

      {/* Герой секция */}
      <section className="relative pt-28 pb-20 md:pt-40 md:pb-32 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <FadeIn delay={0.1}>
              <div className="space-y-6 max-w-xl">
                <span className="inline-block px-3 py-1 bg-secondary text-primary rounded-full text-sm font-medium tracking-wide">
                  Новая коллекция 2025
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight">
                  Современная элегантность в каждой детали
                </h1>
                <p className="text-lg text-muted-foreground">
                  Откройте для себя новое измерение стиля с нашей эксклюзивной коллекцией дизайнерской одежды, где традиционная роскошь встречается с современным минимализмом.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="rounded-full">
                    Смотреть коллекцию
                    <Icon name="ArrowRight" />
                  </Button>
                  <Button size="lg" variant="outline" className="rounded-full">
                    О бренде
                  </Button>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <div className="relative">
                <div className="absolute -inset-4 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 blur-3xl -z-10"></div>
                <img 
                  src="https://images.unsplash.com/photo-1588117305388-c2631a279f82?ixlib=rb-4.0.3&auto=format&fit=crop&w=700&q=80" 
                  alt="Модель в оранжевом костюме" 
                  className="w-full h-[500px] md:h-[600px] object-cover rounded-xl"
                />
                <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <p className="font-display text-xl">Летняя коллекция</p>
                  <p className="text-primary font-medium">от 12 900 ₽</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-16 bg-secondary/50" id="features">
        <div className="container mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center space-y-3">
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Icon name="Truck" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-medium text-lg">Бесплатная доставка</h3>
                <p className="text-muted-foreground text-sm">При заказе от 5000 ₽</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Icon name="Leaf" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-medium text-lg">Экологичные материалы</h3>
                <p className="text-muted-foreground text-sm">Забота о природе</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Icon name="Sparkles" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-medium text-lg">Эксклюзивный дизайн</h3>
                <p className="text-muted-foreground text-sm">Уникальные модели</p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="mx-auto bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center">
                  <Icon name="Undo2" className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-medium text-lg">Возврат 30 дней</h3>
                <p className="text-muted-foreground text-sm">Гарантия качества</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Коллекция */}
      <section className="py-20" id="collection">
        <div className="container mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Избранная коллекция</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">Наша эксклюзивная коллекция создана для тех, кто ценит утонченность и элегантность в каждой детали.</p>
            </div>
          </FadeIn>

          <Tabs defaultValue="all" className="mb-10">
            <TabsList className="grid grid-cols-4 max-w-md mx-auto">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="new">Новинки</TabsTrigger>
              <TabsTrigger value="women">Женщинам</TabsTrigger>
              <TabsTrigger value="men">Мужчинам</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    img: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                    title: "Платье 'Оранжевый Закат'",
                    price: "22 900 ₽",
                    isNew: true
                  },
                  {
                    img: "https://images.unsplash.com/photo-1549062573-edc78a53ffa6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                    title: "Костюм 'Терракота'",
                    price: "35 800 ₽"
                  },
                  {
                    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                    title: "Блузка 'Коралловый Риф'",
                    price: "15 500 ₽"
                  },
                  {
                    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                    title: "Пальто 'Имбирь'",
                    price: "42 300 ₽",
                    isNew: true
                  },
                  {
                    img: "https://images.unsplash.com/photo-1525450824786-227cbef70703?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                    title: "Юбка 'Карамель'",
                    price: "18 200 ₽"
                  },
                  {
                    img: "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                    title: "Рубашка 'Апельсин'",
                    price: "16 700 ₽"
                  }
                ].map((item, i) => (
                  <FadeIn key={i} delay={0.1 * i}>
                    <div className="group relative">
                      <div className="overflow-hidden rounded-xl">
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      {item.isNew && (
                        <span className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                          New
                        </span>
                      )}
                      <Button 
                        variant="secondary" 
                        size="icon" 
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Icon name="Heart" />
                      </Button>
                      <div className="mt-4">
                        <h3 className="font-medium text-lg">{item.title}</h3>
                        <p className="text-primary font-semibold">{item.price}</p>
                      </div>
                      <Button 
                        className="w-full mt-3 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0"
                      >
                        Добавить в корзину
                      </Button>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="new" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    img: "https://images.unsplash.com/photo-1593030103066-0093718efeb9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                    title: "Платье 'Оранжевый Закат'",
                    price: "22 900 ₽"
                  },
                  {
                    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
                    title: "Пальто 'Имбирь'",
                    price: "42 300 ₽"
                  }
                ].map((item, i) => (
                  <FadeIn key={i} delay={0.1 * i}>
                    <div className="group relative">
                      <div className="overflow-hidden rounded-xl">
                        <img 
                          src={item.img} 
                          alt={item.title} 
                          className="w-full h-[400px] object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <span className="absolute top-4 left-4 bg-primary text-white text-xs font-medium px-2 py-1 rounded">
                        New
                      </span>
                      <Button 
                        variant="secondary" 
                        size="icon" 
                        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Icon name="Heart" />
                      </Button>
                      <div className="mt-4">
                        <h3 className="font-medium text-lg">{item.title}</h3>
                        <p className="text-primary font-semibold">{item.price}</p>
                      </div>
                      <Button 
                        className="w-full mt-3 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0"
                      >
                        Добавить в корзину
                      </Button>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="women" className="mt-6">
              {/* Аналогичный код для женской коллекции */}
              <div className="text-center py-12">
                <p className="text-muted-foreground">Женская коллекция будет доступна в ближайшее время</p>
              </div>
            </TabsContent>
            
            <TabsContent value="men" className="mt-6">
              {/* Аналогичный код для мужской коллекции */}
              <div className="text-center py-12">
                <p className="text-muted-foreground">Мужская коллекция будет доступна в ближайшее время</p>
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="text-center mt-10">
            <Button variant="outline" size="lg" className="rounded-full">
              Показать больше
              <Icon name="ChevronDown" />
            </Button>
          </div>
        </div>
      </section>

      {/* Баннер */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <FadeIn>
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-display font-semibold">Подпишитесь на новости и скидки</h2>
                <p className="opacity-90">Получите скидку 15% на первый заказ и будьте в курсе новых коллекций и специальных предложений.</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input 
                    type="email" 
                    placeholder="Ваш email" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 rounded-full"
                  />
                  <Button variant="secondary" className="text-primary font-medium shrink-0 rounded-full">
                    Подписаться
                  </Button>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Модель" 
                  className="rounded-lg h-64 object-cover"
                />
                <img 
                  src="https://images.unsplash.com/photo-1509319117193-57bab727e09d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                  alt="Модель" 
                  className="rounded-lg h-64 object-cover mt-8"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section className="py-20" id="contact">
        <div className="container mx-auto px-6 lg:px-10">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">Связаться с нами</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">У вас есть вопросы о наших коллекциях или индивидуальном заказе? Наши консультанты всегда готовы помочь.</p>
            </div>
          </FadeIn>
          
          <div className="grid md:grid-cols-2 gap-10">
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-secondary p-3 rounded-full shrink-0">
                    <Icon name="MapPin" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Наш адрес</h3>
                    <p className="text-muted-foreground">Москва, ул. Большая Дмитровка, 11</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-secondary p-3 rounded-full shrink-0">
                    <Icon name="Phone" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Телефон</h3>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-secondary p-3 rounded-full shrink-0">
                    <Icon name="Mail" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Email</h3>
                    <p className="text-muted-foreground">info@orange-fashion.ru</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="bg-secondary p-3 rounded-full shrink-0">
                    <Icon name="Clock" className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg">Часы работы</h3>
                    <p className="text-muted-foreground">Пн-Вс: 10:00 - 22:00</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <FadeIn delay={0.3}>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Ваше имя</label>
                    <Input id="name" placeholder="Введите ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input id="email" type="email" placeholder="Введите ваш email" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Тема</label>
                  <Input id="subject" placeholder="Введите тему сообщения" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Сообщение</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    placeholder="Введите ваше сообщение"
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                
                <Button size="lg" className="w-full">Отправить сообщение</Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-secondary py-16">
        <div className="container mx-auto px-6 lg:px-10">
          <div className="grid md:grid-cols-4 gap-10">
            <div>
              <h2 className="text-2xl font-display font-semibold mb-4">ORANGÉ</h2>
              <p className="text-muted-foreground mb-5">Эксклюзивный дизайн одежды, созданный с любовью к деталям и стилю.</p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Icon name="Instagram" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Icon name="Facebook" />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Icon name="Twitter" />
                </Button>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-4">Категории</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Женщинам</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Мужчинам</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Новинки</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Коллекции</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Распродажа</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-4">Информация</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">О бренде</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Доставка и оплата</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Возврат и обмен</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-medium text-lg mb-4">Подписка на новости</h3>
              <p className="text-muted-foreground mb-4">Будьте в курсе новых коллекций и скидок</p>
              <div className="flex flex-col space-y-3">
                <Input placeholder="Email" />
                <Button>Подписаться</Button>
              </div>
            </div>
          </div>
          
          <Separator className="my-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">© ORANGÉ 2025. Все права защищены.</p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
