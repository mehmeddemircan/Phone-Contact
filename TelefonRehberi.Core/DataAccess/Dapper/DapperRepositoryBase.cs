using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Linq.Expressions;
using System.Text;
using System.Threading.Tasks;
using TelefonRehberi.Core.Entities;

namespace TelefonRehberi.Core.DataAccess.Dapper
{
    public class DapperRepositoryBase<TEntity, TContext> : IEntityRepository<TEntity>
    where TEntity : BaseEntity, new()
    where TContext : DbContext, new()
    {

        private readonly IConfiguration _configuration;
        public DapperRepositoryBase(IConfiguration configuration)
        {
            _configuration = configuration;
        }
        public Task<TEntity> AddAsync(TEntity entity)
        {
            throw new NotImplementedException();
        }

        public Task DeleteAsync(int id)
        {
            throw new NotImplementedException();
        }

        public TEntity Get(Expression<Func<TEntity, bool>> filter)
        {
            throw new NotImplementedException();
        }

        public  Task<List<TEntity>> GetAllAsync()
        {

            throw new NotImplementedException();
            //var sql = "SELECT * FROM Products";
            //using (var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            //{
            //    connection.Open();
            //    var result = await connection.QueryAsync<TEntity>(sql);
            //    return result.ToList();
            //}
        }

        public Task<TEntity> GetById(int id)
        {
            throw new NotImplementedException();
        }

        public Task UpdateAsync(int id, TEntity entity)
        {
            throw new NotImplementedException();
        }
    }
}
