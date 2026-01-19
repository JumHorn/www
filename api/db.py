import pymysql
import redis

# db config
MYSQL_CONFIG = {
    "host": "127.0.0.1",
    "port": 3306,
    "user": "root",
    "password": "123456",
    "database": "test",
    "charset": "utf8mb4",
}

REDIS_CONFIG = {
    "host": "127.0.0.1",
    "port": 6379,
    "db": 0,
    "password": None,
}


class DB:
    _mysql_conn = None
    _redis_conn = None

    @classmethod
    def mysql(cls):
        """获取 MySQL 连接（单例）"""
        if cls._mysql_conn is None:
            cls._mysql_conn = pymysql.connect(**MYSQL_CONFIG)
        else:
            try:
                cls._mysql_conn.ping(reconnect=True)
            except Exception:
                cls._mysql_conn = pymysql.connect(**MYSQL_CONFIG)

        return cls._mysql_conn

    @classmethod
    def redis(cls):
        """获取 Redis 连接（单例）"""
        if cls._redis_conn is None:
            cls._redis_conn = redis.Redis(**REDIS_CONFIG)
        else:
            try:
                cls._redis_conn.ping()
            except Exception:
                cls._redis_conn = redis.Redis(**REDIS_CONFIG)

        return cls._redis_conn

    @classmethod
    def close_all(cls):
        """关闭所有连接"""
        if cls._mysql_conn:
            cls._mysql_conn.close()
            cls._mysql_conn = None

        if cls._redis_conn:
            cls._redis_conn.close()
            cls._redis_conn = None
